import { isPlatformBrowser } from '@angular/common'
import { Directive, ElementRef, KeyValueDiffers, NgZone, OnDestroy, PLATFORM_ID, computed, effect, inject, input } from '@angular/core'
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

    readonly disabled = input<boolean>(false)

    /** Can be used to provide optional custom config */
    readonly _config = input<DropzoneConfig>(undefined, { alias: 'nxtDropzone' })
    private readonly configDiff = this.differs.find(this._config() || {}).create()
    private readonly config = computed(() => ({ ...this._config() }), {
        equal: (_, n) => !this.configDiff.diff(n)
    })

    private readonly _params = computed(() => {
        let newParams = this.defaults
            ? new _DropzoneConfig(this.defaults)
            : undefined
        const config = this.config()
        if (newParams && config)
            newParams.assign(config)
        else if (config)
            newParams = new _DropzoneConfig(config)
        const params = { ...newParams }
        Object.entries(params).forEach(([k, v]) => {
            if (v === undefined)
                delete (params as any)[k]
        })
        return params as DropzoneConfig
    })
    private readonly paramDiff = this.differs.find({ ...this._params() }).create()
    private readonly params = computed(() => ({ ...this._params() }), {
        equal: (_, n) => {
            const d = this.paramDiff.diff(n)
            if (d) {
                let hasChanges = false
                d.forEachItem(r => {
                    if (!internalChanges.has(r.key as any) && r.currentValue !== r.previousValue)
                        hasChanges = true
                })
                return !hasChanges
            }
            return !d
        }
    })

    private _instance?: Dropzone | undefined

    get dropzone() {
        return this._instance
    }

    /** @internal */
    readonly _isSingle = computed(() => this.params()?.maxFiles === 1)

    /** @internal */
    readonly _isMultiple = computed(() => this.params()?.maxFiles !== 1)

    constructor() {
        super()
        let disabled = this.disabled()
        effect(() => {
            disabled = this.disabled()
            const instance = this._instance
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
        effect(() => {
            const params = this.params()
            this.destroyInstance()
            this.initInstance(params, disabled)
        })
    }

    /** @internal */
    ngOnDestroy(): void {
        this.destroyInstance()
    }

    /** @internal */
    reset(cancel?: boolean) {
        const instance = this._instance
        if (instance) {
            this.zone.runOutsideAngular(() => {
                instance.removeAllFiles(cancel)
            })
        }
    }

    private initInstance(params?: DropzoneConfig, disabled = false) {
        if (!isPlatformBrowser(this.platformId) || !params) {
            return
        }

        this.zone.runOutsideAngular(() => {
            const instance = new Dropzone(this.elementRef.nativeElement, params)
            if (disabled)
                this.zone.runOutsideAngular(() => {
                    instance.disable()
                })

            this._instance = instance

            this.zone.run(() => {
                this.listeners.DZ_INIT.emit(instance)
            })

            // Add auto reset handling for events
            instance.on('success', () => {
                const timeout = this.params()?.autoReset ?? -1
                if (timeout >= 0) {
                    setTimeout(() => this.reset(), timeout)
                }
            })

            instance.on('error', () => {
                const timeout = this.params()?.errorReset ?? -1
                if (timeout >= 0) {
                    setTimeout(() => this.reset(), timeout)
                }
            })

            instance.on('canceled', () => {
                const timeout = this.params()?.cancelReset ?? -1
                if (timeout >= 0) {
                    setTimeout(() => this.reset(), timeout)
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
        const instance = this._instance
        if (instance) {
            this.zone.runOutsideAngular(() => {
                instance.destroy()
            })

            this._instance = undefined
        }
    }
}
