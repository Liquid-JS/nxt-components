import { AfterContentInit, ChangeDetectorRef, Directive, HostBinding, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, input } from '@angular/core'
import { merge, of as observableOf, Subscription } from 'rxjs'
import { outputToObservable } from '@angular/core/rxjs-interop'
import { DateTimeComponent } from './date-time-picker/date-time-picker.component'

@Directive({
    selector: '[nxtDateTimeTrigger]'
})
export class DateTimeTriggerDirective<T> implements OnInit, OnChanges, AfterContentInit, OnDestroy {

    readonly dtPicker = input<DateTimeComponent<T>>(undefined, { alias: 'nxtDateTimeTrigger' })

    private _disabled?: boolean
    @Input()
    get disabled(): boolean {
        return this._disabled ?? !!this.dtPicker()?.disabled
    }

    set disabled(value: boolean) {
        this._disabled = value
    }

    /** @internal */
    @HostBinding('class.nxt-dt-trigger-disabled')
    get triggerDisabledClass(): boolean {
        return this.disabled
    }

    private stateChanges?: Subscription

    constructor(
        protected readonly changeDetector: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges) {
        if ('datepicker' in changes) {
            this.watchStateChanges()
        }
    }

    ngAfterContentInit() {
        this.watchStateChanges()
    }

    ngOnDestroy(): void {
        this.stateChanges?.unsubscribe()
        this.stateChanges = undefined
    }

    @HostListener('click', ['$event'])
    handleClickOnHost(event: Event): void {
        const dtPicker = this.dtPicker()
        if (dtPicker) {
            dtPicker.open()
            event.stopPropagation()
        }
    }

    private watchStateChanges(): void {
        this.stateChanges?.unsubscribe()
        this.stateChanges = undefined

        const dtPicker = this.dtPicker()
        const inputDisabled = dtPicker && dtPicker.dtInput ?
            outputToObservable(dtPicker.dtInput.disabledChange) : observableOf()

        const dtPickerValue = this.dtPicker()
        const pickerDisabled = dtPickerValue ?
            outputToObservable(dtPickerValue.disabledChange) : observableOf()

        this.stateChanges = merge(pickerDisabled, inputDisabled)
            .subscribe(() => {
                this.changeDetector.markForCheck()
            })
    }
}
