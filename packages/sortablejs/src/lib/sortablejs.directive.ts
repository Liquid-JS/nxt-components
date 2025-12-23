import {
    AfterViewInit,
    Directive,
    ElementRef,
    NgZone,
    OnChanges,
    OnDestroy,
    Renderer2,
    SimpleChange,
    computed,
    inject,
    input,
    output
} from '@angular/core'
import { type AbstractControl, type FormArray } from '@angular/forms'
import Sortable, { Options, SortableEvent } from 'sortablejs'
import { GLOBALS } from './globals'
import { SortablejsBindings } from './sortablejs-bindings'
import { SortablejsService } from './sortablejs.service'

export type SortableData<T> = [T] extends [AbstractControl] ? (FormArray<T> | T[]) : T[]
export type CloneFunction<T> = (item: T) => T

@Directive({ selector: '[nxtSortablejs]' })
export class SortablejsDirective<T> implements OnChanges, OnDestroy, AfterViewInit {

    private readonly globalConfig = inject(GLOBALS, { optional: true }) ?? undefined
    private readonly service = inject(SortablejsService)
    private readonly element = inject(ElementRef)
    private readonly zone = inject(NgZone)
    private readonly renderer = inject(Renderer2)

    /** Input data, can be Array or FormArray */
    readonly data = input<SortableData<T>>(undefined, { alias: 'nxtSortablejs' })

    /**
     * CSS selector for the sortable container
     *
     * Mostly required when used with custom components which wrap items in multiple containers. In that case,
     * this should be the selector for the direct HTML parent of sortable items.
     */
    readonly sortablejsContainer = input<string>()

    /** Sortablejs configuration */
    readonly config = input<Options>()

    /** A function invoked when cloning items from template dataset into target dataset */
    readonly cloneFunction = input<CloneFunction<T>>()

    /** Initialised a new Sortablejs instance */
    readonly init = output<Sortable>()

    private sortableInstance?: Sortable

    private readonly bindings = computed(() => {
        const data = this.data()
        if (!data) {
            return new SortablejsBindings([])
        } else if (data instanceof SortablejsBindings) {
            return data
        } else {
            return new SortablejsBindings([data])
        }
    })

    private readonly optionsWithoutEvents = computed(() => ({ ...(this.globalConfig || {}), ...(this.config() || {}) }))
    private readonly overridenOptions = computed<Options>(() => ({
        // always intercept standard events but act only in case items are set (bindingEnabled)
        // allows to forget about tracking this.items changes
        onAdd: (event: SortableEvent) => {
            this.service.transfer = (items: any[]) => {
                this.bindings().injectIntoEvery(event.newIndex!, items)
                this.proxyEvent('onAdd', event)
            }

            this.proxyEvent('onAddOriginal', event)
        },
        onRemove: (event: SortableEvent) => {
            const bindings = this.bindings()

            if (bindings.provided) {
                if (this.isCloning) {
                    this.service.transfer?.(bindings.getFromEvery(event.oldIndex!).map(item => this.clone(item)))

                    // great thanks to https://github.com/tauu
                    // event.item is the original item from the source list which is moved to the target list
                    // event.clone is a clone of the original item and will be added to source list
                    // If bindings are provided, adding the item dom element to the target list causes artifacts
                    // as it interferes with the rendering performed by the angular template.
                    // Therefore we remove it immediately and also move the original item back to the source list.
                    // (event handler may be attached to the original item and not its clone, therefore keeping
                    // the original dom node, circumvents side effects )
                    this.renderer.removeChild(event.item.parentNode, event.item)
                    this.renderer.insertBefore(event.clone.parentNode, event.item, event.clone)
                    this.renderer.removeChild(event.clone.parentNode, event.clone)
                } else {
                    this.service.transfer?.(bindings.extractFromEvery(event.oldIndex!))
                }

                this.service.transfer = undefined
            }

            this.proxyEvent('onRemove', event)
        },
        onUpdate: (event: SortableEvent) => {
            const bindings = this.bindings()

            bindings.injectIntoEvery(event.newIndex!, bindings.extractFromEvery(event.oldIndex!))
            this.proxyEvent('onUpdate', event)
        }
    }))

    private readonly options = computed(() => ({ ...this.optionsWithoutEvents(), ...this.overridenOptions() }))

    /** @internal */
    ngAfterViewInit() {
        if (Sortable?.create!) { // Sortable does not exist in angular universal (SSR)
            this.create()
        }
    }

    /** @internal */
    ngOnChanges(changes: { [prop in keyof SortablejsDirective<T>]: SimpleChange }) {
        const optionsChange = changes.config

        if (optionsChange && !optionsChange.isFirstChange()) {
            const previousOptions: Options = optionsChange.previousValue
            const currentOptions: Options = optionsChange.currentValue

            Object.keys(currentOptions).forEach(optionName => {
                if (currentOptions[optionName as keyof Options] !== previousOptions[optionName as keyof Options]) {
                    // use low-level option setter
                    this.sortableInstance?.option(optionName as keyof Options, this.options()[optionName as keyof Options])
                }
            })
        }
    }

    /** @internal */
    ngOnDestroy() {
        if (this.sortableInstance) {
            this.sortableInstance.destroy()
        }
    }

    private create() {
        const sortablejsContainer = this.sortablejsContainer()
        const container = sortablejsContainer ? this.element.nativeElement.querySelector(sortablejsContainer) : this.element.nativeElement

        setTimeout(() => {
            if (typeof window != 'undefined') {
                this.sortableInstance = Sortable.create(container, this.options())
                this.init.emit(this.sortableInstance)
            }
        }, 0)
    }

    private proxyEvent(eventName: string, ...params: any[]) {
        this.zone.run(() => { // re-entering zone, see https://github.com/SortableJS/angular-sortablejs/issues/110#issuecomment-408874600
            const opts = this.optionsWithoutEvents()
            if (opts?.[eventName as keyof typeof opts]) {
                (opts[eventName as keyof typeof opts] as (...params: any[]) => void)(...params)
            }
        })
    }

    private get isCloning() {
        const groupOptions = this.sortableInstance?.options.group
        return groupOptions && (typeof groupOptions != 'string')
            ? groupOptions.checkPull?.(this.sortableInstance!, this.sortableInstance!, null as any, null as any) === 'clone'
            : groupOptions === 'clone'
    }

    private clone(item: T): T {
        // by default pass the item through, no cloning performed
        return (this.cloneFunction() || (subitem => subitem))(item)
    }

}
