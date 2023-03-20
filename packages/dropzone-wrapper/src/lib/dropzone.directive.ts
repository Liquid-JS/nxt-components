/* eslint-disable @angular-eslint/no-output-rename */
import { isPlatformBrowser } from '@angular/common'
import { Directive, DoCheck, ElementRef, EventEmitter, HostBinding, Inject, Input, KeyValueDiffers, NgZone, OnDestroy, OnInit, Optional, Output, PLATFORM_ID } from '@angular/core'
import Dropzone from 'dropzone'
import { DropzoneConfig, DropzoneEvent, DropzoneEvents, DropzoneListeners, internalChanges, NXT_DROPZONE_CONFIG, NXT_DROPZONE_LISTENERS, _DropzoneConfig } from './dropzone.interfaces'

@Directive({
    selector: '[nxtDropzone]',
    exportAs: 'nxtDropzone'
})
export class DropzoneDirective implements OnInit, OnDestroy, DoCheck, DropzoneListeners {

    private instance?: Dropzone

    private _disabled = false
    /** Disables / detaches Dropzone from the element */
    @Input() set disabled(val: boolean) {
        val = !!val
        if (val != this._disabled && this.instance) {
            if (val)
                this.zone.runOutsideAngular(() => {
                    this.instance!.disable()
                })
            else
                this.zone.runOutsideAngular(() => {
                    this.instance!.enable()
                })
        }
        this._disabled = val
    }
    get disabled() {
        return this._disabled
    }

    private _params = this.defaults
        ? new _DropzoneConfig(this.defaults)
        : undefined
    /** Can be used to provide optional custom config */
    @Input('nxtDropzone') config?: DropzoneConfig

    private configDiff = this.differs.find(this.config || {}).create()
    private paramDiff = this.differs.find(this._params || {}).create()

    @Output('init') readonly DZ_INIT = this.component?.DZ_INIT
        ?? new EventEmitter<Dropzone>()

    @Output('drop') readonly DZ_DROP = this.component?.DZ_DROP
        ?? new EventEmitter<DragEvent>()
    @Output('dragStart') readonly DZ_DRAGSTART = this.component?.DZ_DRAGSTART
        ?? new EventEmitter<DragEvent>()
    @Output('dragEnd') readonly DZ_DRAGEND = this.component?.DZ_DRAGEND
        ?? new EventEmitter<DragEvent>()
    @Output('dragEnter') readonly DZ_DRAGENTER = this.component?.DZ_DRAGENTER
        ?? new EventEmitter<DragEvent>()
    @Output('dragOver') readonly DZ_DRAGOVER = this.component?.DZ_DRAGOVER
        ?? new EventEmitter<DragEvent>()
    @Output('dragLeave') readonly DZ_DRAGLEAVE = this.component?.DZ_DRAGLEAVE
        ?? new EventEmitter<DragEvent>()
    @Output('paste') readonly DZ_PASTE = this.component?.DZ_PASTE
        ?? new EventEmitter<DragEvent>()

    @Output('reset') readonly DZ_RESET = this.component?.DZ_RESET
        ?? new EventEmitter<void>()

    @Output('addedFile') readonly DZ_ADDEDFILE = this.component?.DZ_ADDEDFILE
        ?? new EventEmitter<Dropzone.DropzoneFile>()
    @Output('addedFiles') readonly DZ_ADDEDFILES = this.component?.DZ_ADDEDFILES
        ?? new EventEmitter<Dropzone.DropzoneFile>()
    @Output('removedFile') readonly DZ_REMOVEDFILE = this.component?.DZ_REMOVEDFILE
        ?? new EventEmitter<Dropzone.DropzoneFile>()
    @Output('thumbnail') readonly DZ_THUMBNAIL = this.component?.DZ_THUMBNAIL
        ?? new EventEmitter<[Dropzone.DropzoneFile, string]>()

    @Output('error') readonly DZ_ERROR = this.component?.DZ_ERROR
        ?? new EventEmitter<[Dropzone.DropzoneFile, string | Error]>()
    @Output('errorMultiple') readonly DZ_ERRORMULTIPLE = this.component?.DZ_ERRORMULTIPLE
        ?? new EventEmitter<[Dropzone.DropzoneFile[], string | Error]>()

    @Output('processing') readonly DZ_PROCESSING = this.component?.DZ_PROCESSING
        ?? new EventEmitter<Dropzone.DropzoneFile>()
    @Output('processingMultiple') readonly DZ_PROCESSINGMULTIPLE = this.component?.DZ_PROCESSINGMULTIPLE
        ?? new EventEmitter<Dropzone.DropzoneFile[]>()

    @Output('uploadProgress') readonly DZ_UPLOADPROGRESS = this.component?.DZ_UPLOADPROGRESS
        ?? new EventEmitter<[Dropzone.DropzoneFile, number, number]>()
    @Output('totalUploadProgress') readonly DZ_TOTALUPLOADPROGRESS = this.component?.DZ_TOTALUPLOADPROGRESS
        ?? new EventEmitter<[number, number, number]>()

    @Output('sending') readonly DZ_SENDING = this.component?.DZ_SENDING
        ?? new EventEmitter<[Dropzone.DropzoneFile, XMLHttpRequest, FormData]>()
    @Output('sendingMultiple') readonly DZ_SENDINGMULTIPLE = this.component?.DZ_SENDINGMULTIPLE
        ?? new EventEmitter<[Dropzone.DropzoneFile[], XMLHttpRequest, FormData]>()

    @Output('success') readonly DZ_SUCCESS = this.component?.DZ_SUCCESS
        // eslint-disable-next-line @typescript-eslint/ban-types
        ?? new EventEmitter<[Dropzone.DropzoneFile, Object | string]>()
    @Output('successMultiple') readonly DZ_SUCCESSMULTIPLE = this.component?.DZ_SUCCESSMULTIPLE
        ?? new EventEmitter<Dropzone.DropzoneFile[]>()

    @Output('canceled') readonly DZ_CANCELED = this.component?.DZ_CANCELED
        ?? new EventEmitter<Dropzone.DropzoneFile>()
    @Output('canceledMultiple') readonly DZ_CANCELEDMULTIPLE = this.component?.DZ_CANCELEDMULTIPLE
        ?? new EventEmitter<Dropzone.DropzoneFile[]>()

    @Output('complete') readonly DZ_COMPLETE = this.component?.DZ_COMPLETE
        ?? new EventEmitter<Dropzone.DropzoneFile>()
    @Output('completeMultiple') readonly DZ_COMPLETEMULTIPLE = this.component?.DZ_COMPLETEMULTIPLE
        ?? new EventEmitter<Dropzone.DropzoneFile[]>()

    @Output('maxFilesExceeded') readonly DZ_MAXFILESEXCEEDED = this.component?.DZ_MAXFILESEXCEEDED
        ?? new EventEmitter<Dropzone.DropzoneFile>()
    @Output('maxFilesReached') readonly DZ_MAXFILESREACHED = this.component?.DZ_MAXFILESREACHED
        ?? new EventEmitter<Dropzone.DropzoneFile[]>()

    @Output('queueComplete') readonly DZ_QUEUECOMPLETE = this.component?.DZ_QUEUECOMPLETE
        ?? new EventEmitter<void>()

    get dropzone() {
        return this.instance
    }

    /** @internal */
    @HostBinding('class.dz-single')
    get isSingle() {
        return this._params?.maxFiles === 1
    }

    /** @internal */
    @HostBinding('class.dz-multiple')
    get isMultiple() {
        return this._params?.maxFiles !== 1
    }

    constructor(
        private readonly zone: NgZone,
        private readonly elementRef: ElementRef<HTMLElement>,
        private readonly differs: KeyValueDiffers,
        @Inject(PLATFORM_ID)
        // eslint-disable-next-line @typescript-eslint/ban-types
        private readonly platformId: Object,
        @Optional()
        @Inject(NXT_DROPZONE_CONFIG)
        private readonly defaults?: DropzoneConfig,
        @Optional()
        @Inject(NXT_DROPZONE_LISTENERS)
        private readonly component?: DropzoneListeners
    ) { }

    /** @internal */
    ngOnInit(): void {
        this.initInstance()
    }

    /** @internal */
    ngOnDestroy(): void {
        this.destroyInstance()
    }

    /** @internal */
    ngDoCheck(): void {
        const changes = this.configDiff.diff(this.config || {} as any)

        if (changes) {
            let newParams = this.defaults
                ? new _DropzoneConfig(this.defaults)
                : undefined
            if (newParams && this.config)
                newParams.assign(this.config)
            else if (this.config)
                newParams = new _DropzoneConfig(this.config)
            const d = this.paramDiff.diff(newParams || {} as any)
            if (d) {
                this._params = newParams
                let hasChanges = false
                d.forEachItem(r => {
                    if (!internalChanges.has(r.key as any) && r.currentValue !== r.previousValue)
                        hasChanges = true
                })
                if (hasChanges) {
                    this.destroyInstance()
                    this.initInstance()
                }
            }
        }
    }

    /** @internal */
    reset(cancel?: boolean) {
        if (this.instance) {
            this.zone.runOutsideAngular(() => {
                this.instance!.removeAllFiles(cancel)
            })
        }
    }

    private initInstance() {
        if (!isPlatformBrowser(this.platformId) || !this._params) {
            return
        }

        this.zone.runOutsideAngular(() => {
            this.instance = new Dropzone(this.elementRef.nativeElement, this._params)
        })

        if (this.disabled) {
            this.instance!.disable()
        }

        if (this.DZ_INIT.observed) {
            this.zone.run(() => {
                this.DZ_INIT.emit(this.instance)
            })
        }

        // Add auto reset handling for events
        this.instance!.on('success', () => {
            if ((this._params?.autoReset ?? -1) >= 0) {
                setTimeout(() => this.reset(), this._params?.autoReset)
            }
        })

        this.instance!.on('error', () => {
            if ((this._params?.errorReset ?? -1) >= 0) {
                setTimeout(() => this.reset(), this._params?.errorReset)
            }
        })

        this.instance!.on('canceled', () => {
            if ((this._params?.cancelReset ?? -1) >= 0) {
                setTimeout(() => this.reset(), this._params?.cancelReset)
            }
        })

        // Add native Dropzone event handling
        DropzoneEvents.forEach((eventName: DropzoneEvent) => {
            this.instance!.on(eventName.toLowerCase(), (...args: any[]) => {
                args = (args.length === 1) ? args[0] : args

                const output = `DZ_${eventName.toUpperCase()}`

                const emitter = this[output as keyof DropzoneDirective] as EventEmitter<any>

                if (emitter.observed) {
                    this.zone.run(() => {
                        emitter.emit(args)
                    })
                }
            })
        })
    }

    private destroyInstance() {
        if (this.instance) {
            this.zone.runOutsideAngular(() => {
                this.instance!.destroy()
            })

            this.instance = undefined
        }
    }
}
