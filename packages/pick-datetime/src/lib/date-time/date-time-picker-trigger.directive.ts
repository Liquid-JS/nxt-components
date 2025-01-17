import { AfterContentInit, ChangeDetectorRef, Directive, HostBinding, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core'
import { merge, Observable, of as observableOf, Subscription } from 'rxjs'
import { DateTimeComponent } from './date-time-picker/date-time-picker.component'

@Directive({
    selector: '[nxtDateTimeTrigger]',
    standalone: false
})
export class DateTimeTriggerDirective<T> implements OnInit, OnChanges, AfterContentInit, OnDestroy {

    @Input('nxtDateTimeTrigger')
    dtPicker?: DateTimeComponent<T>

    private _disabled?: boolean
    @Input()
    get disabled(): boolean {
        return this._disabled ?? !!this.dtPicker?.disabled
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
        if (this.dtPicker) {
            this.dtPicker.open()
            event.stopPropagation()
        }
    }

    private watchStateChanges(): void {
        this.stateChanges?.unsubscribe()
        this.stateChanges = undefined

        const inputDisabled = this.dtPicker && this.dtPicker.dtInput ?
            this.dtPicker.dtInput.disabledChange : observableOf()

        const pickerDisabled = this.dtPicker ?
            this.dtPicker.disabledChange : observableOf()

        this.stateChanges = merge(pickerDisabled as Observable<boolean>, inputDisabled as Observable<boolean>)
            .subscribe(() => {
                this.changeDetector.markForCheck()
            })
    }
}
