import { AfterContentInit, ChangeDetectorRef, Directive, HostBinding, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core'
import { merge, Observable, of as observableOf, Subscription } from 'rxjs'
import { OwlDateTimeComponent } from './date-time-picker/date-time-picker.component'

@Directive({
    selector: '[owlDateTimeTrigger]'
})
export class OwlDateTimeTriggerDirective<T> implements OnInit, OnChanges, AfterContentInit, OnDestroy {

    @Input('owlDateTimeTrigger') dtPicker: OwlDateTimeComponent<T>

    private _disabled: boolean
    @Input()
    get disabled(): boolean {
        return this._disabled === undefined ? this.dtPicker.disabled : !!this._disabled
    }

    set disabled(value: boolean) {
        this._disabled = value
    }

    @HostBinding('class.owl-dt-trigger-disabled')
    get owlDTTriggerDisabledClass(): boolean {
        return this.disabled
    }

    private stateChanges = Subscription.EMPTY

    constructor(protected changeDetector: ChangeDetectorRef) {
    }

    public ngOnInit(): void {
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.datepicker) {
            this.watchStateChanges()
        }
    }

    public ngAfterContentInit() {
        this.watchStateChanges()
    }

    public ngOnDestroy(): void {
        this.stateChanges.unsubscribe()
    }

    @HostListener('click', ['$event'])
    public handleClickOnHost(event: Event): void {
        if (this.dtPicker) {
            this.dtPicker.open()
            event.stopPropagation()
        }
    }

    private watchStateChanges(): void {
        this.stateChanges.unsubscribe()

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
