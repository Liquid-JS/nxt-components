import { coerceNumberProperty } from '@angular/cdk/coercion'
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output } from '@angular/core'
import { Subject, Subscription } from 'rxjs'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

@Component({
    exportAs: 'owlDateTimeTimerBox',
    selector: 'owl-date-time-timer-box',
    templateUrl: './timer-box.component.html',
    styleUrls: ['./timer-box.component.scss'],
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class OwlTimerBoxComponent implements OnInit, OnDestroy {

    @Input() showDivider = false

    @Input() upBtnAriaLabel?: string

    @Input() upBtnDisabled: boolean = false

    @Input() downBtnAriaLabel?: string

    @Input() downBtnDisabled: boolean = false

    /**
     * Value would be displayed in the box
     * If it is undefiend, the box would display [value]
     * */
    @Input() boxValue?: number

    @Input() value: number = 0

    @Input() min: number = 0

    @Input() max: number = 0

    @Input() step = 1

    @Input() inputLabel?: string

    @Output() valueChange = new EventEmitter<number>()

    @Output() inputChange = new EventEmitter<number>()

    private inputStream = new Subject<string>()

    private inputStreamSub?: Subscription

    get displayValue(): number {
        return this.boxValue || this.value
    }

    @HostBinding('class.owl-dt-timer-box')
    get owlDTTimerBoxClass(): boolean {
        return true
    }

    constructor() {
    }

    public ngOnInit() {
        this.inputStreamSub = this.inputStream.pipe(
            debounceTime(500),
            distinctUntilChanged()
        ).subscribe((val: string) => {
            if (val) {
                const inputValue = coerceNumberProperty(val, 0)
                this.updateValueViaInput(inputValue)
            }
        })
    }

    public ngOnDestroy(): void {
        this.inputStreamSub?.unsubscribe()
        this.inputStreamSub = undefined
    }

    public upBtnClicked(): void {
        this.updateValue(this.value + this.step)
    }

    public downBtnClicked(): void {
        this.updateValue(this.value - this.step)
    }

    public handleInputChange(val: string): void {
        this.inputStream.next(val)
    }

    private updateValue(value: number): void {
        this.valueChange.emit(value)
    }

    private updateValueViaInput(value: number): void {
        if (value > this.max || value < this.min) {
            return
        }
        this.inputChange.emit(value)
    }
}
