import { coerceNumberProperty } from '@angular/cdk/coercion'
import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit, input, output } from '@angular/core'
import { Subject, Subscription } from 'rxjs'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { NumberFixedLenPipe } from '../number-fixed-len.pipe'

/** @internal */
@Component({
    selector: 'nxt-date-time-timer-box',
    templateUrl: './timer-box.component.html',
    styleUrls: ['./timer-box.component.scss'],
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        NumberFixedLenPipe
    ]
})

export class TimerBoxComponent implements OnInit, OnDestroy {

    readonly showDivider = input(false)

    readonly upBtnAriaLabel = input<string>()

    readonly upBtnDisabled = input<boolean>(false)

    readonly downBtnAriaLabel = input<string>()

    readonly downBtnDisabled = input<boolean>(false)

    /**
     * Value would be displayed in the box
     * If it is undefiend, the box would display [value]
     */
    readonly boxValue = input<number>()

    readonly value = input<number>(0)

    readonly min = input<number>(0)

    readonly max = input<number>(0)

    readonly step = input(1)

    readonly inputLabel = input<string>()

    readonly valueChange = output<number>()

    readonly inputChange = output<number>()

    private inputStream = new Subject<string>()

    private inputStreamSub?: Subscription

    get displayValue(): number {
        return this.boxValue() || this.value()
    }

    /** @internal */
    @HostBinding('class.nxt-dt-timer-box')
    get timerBoxClass(): boolean {
        return true
    }

    constructor() {
    }

    ngOnInit() {
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

    ngOnDestroy(): void {
        this.inputStreamSub?.unsubscribe()
        this.inputStreamSub = undefined
    }

    upBtnClicked(): void {
        this.updateValue(this.value() + this.step())
    }

    downBtnClicked(): void {
        this.updateValue(this.value() - this.step())
    }

    handleInputChange(val: string): void {
        this.inputStream.next(val)
    }

    private updateValue(value: number): void {
        this.valueChange.emit(value)
    }

    private updateValueViaInput(value: number): void {
        if (value > this.max() || value < this.min()) {
            return
        }
        this.inputChange.emit(value)
    }
}
