import { isPlatformBrowser } from '@angular/common'
import { Directive, ElementRef, KeyValueDiffers, NgZone, OnDestroy, PLATFORM_ID, computed, effect, inject, input, signal } from '@angular/core'
import Dropzone from 'dropzone'
import { DropzoneConfig, DropzoneEvent, DropzoneEvents, DropzoneListeners, internalChanges, NXT_DROPZONE_CONFIG, _DropzoneConfig, NXT_DROPZONE_LISTENERS } from './dropzone.interfaces'

@Directive({
    selector: '[nxtDropzone]',
    exportAs: 'nxtDropzone',
    host: {
        '[class.dz-single]': '_isSingle()',
        '[class.dz-multiple]': '_isMultiple()'
    }
})
export class DropzoneDirective extends DropzoneListeners implements OnDestroy {

    private readonly zone = inject(NgZone)
    private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef)
    private readonly differs = inject(KeyValueDiffers)
    private readonly platformId = inject(PLATFORM_ID)
    private readonly defaults = inject(NXT_DROPZONE_CONFIG, { optional: true })
    private readonly listeners: DropzoneListeners = inject(NXT_DROPZONE_LISTENERS, { optional: true }) || this

    readonly disabled = input(false)

    /** Can be used to provide optional custom config */
    readonly _config = input<DropzoneConfig>(undefined, { alias: 'nxtDropzone' })
    private readonly configDiff = this.differs.find(this._config() || {}).create()
    private readonly config = computed(() => {
        const cfg = this._config()
        return cfg ? { ...cfg } : {}
    }, {
        equal: (_, n) => !this.configDiff.diff(n || {} as any)
    })
    private readonly params = computed(() => {
        let newParams = this.defaults
            ? new _DropzoneConfig(this.defaults)
            : undefined
        const config = this.config()
        if (newParams && config)
            newParams.assign(config)
        else if (config)
            newParams = new _DropzoneConfig(config)
        return newParams
    })

    private readonly paramDiff = this.differs.find(this.params() || {}).create()

    private readonly instance = signal<Dropzone | undefined>(undefined)

    get dropzone() {
        return this.instance()
    }

    /** @internal */
    readonly _isSingle = computed(() => this.params()?.maxFiles === 1)

    /** @internal */
    readonly _isMultiple = computed(() => this.params()?.maxFiles !== 1)

    constructor() {
        super()
        effect(() => {
            const params = this.params()
            const d = this.paramDiff.diff(params || {} as any)
            if (d) {
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
        })
        effect(() => {
            const instance = this.instance()
            const disabled = this.disabled()
            if (instance) {
                if (disabled)
                    this.zone.runOutsideAngular(() => {
                        instance.disable()
                    })
                else
                    this.zone.runOutsideAngular(() => {
                        instance.enable()
                    })
            }
        })
    }

    /** @internal */
    ngOnDestroy(): void {
        this.destroyInstance()
    }

    /** @internal */
    reset(cancel?: boolean) {
        const instance = this.instance()
        if (instance) {
            this.zone.runOutsideAngular(() => {
                instance.removeAllFiles(cancel)
            })
        }
    }

    private initInstance() {
        const params = this.params()
        if (!isPlatformBrowser(this.platformId) || !params) {
            return
        }

        this.zone.runOutsideAngular(() => {
            const instance = new Dropzone(this.elementRef.nativeElement, params)
            this.instance.set(instance)

            this.zone.run(() => {
                this.listeners.DZ_INIT.emit(instance)
            })

            // Add auto reset handling for events
            instance.on('success', () => {
                if ((params.autoReset ?? -1) >= 0) {
                    setTimeout(() => this.reset(), params.autoReset)
                }
            })

            instance.on('error', () => {
                if ((params.errorReset ?? -1) >= 0) {
                    setTimeout(() => this.reset(), params.errorReset)
                }
            })

            instance.on('canceled', () => {
                if ((params.cancelReset ?? -1) >= 0) {
                    setTimeout(() => this.reset(), params.cancelReset)
                }
            })

            // Add native Dropzone event handling
            DropzoneEvents.forEach((eventName: DropzoneEvent) => {
                instance.on(eventName.toLowerCase(), (...args: any[]) => {
                    args = (args.length === 1) ? args[0] : args

                    const output = `DZ_${eventName.toUpperCase()}`

                    const emitter = this.listeners[output as keyof DropzoneListeners]

                    this.zone.run(() => {
                        emitter.emit(args as any)
                    })
                })
            })
        })
    }

    private destroyInstance() {
        const instance = this.instance()
        if (instance) {
            this.zone.runOutsideAngular(() => {
                instance.destroy()
            })

            this.instance.set(undefined)
        }
    }
}
