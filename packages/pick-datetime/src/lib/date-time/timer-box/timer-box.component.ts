import { coerceNumberProperty } from '@angular/cdk/coercion'
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, computed, input, output } from '@angular/core'
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
    ],
    host: {
        '[class.nxt-dt-timer-box]': 'true'
    }
})

export class TimerBoxComponent implements OnInit, OnDestroy {

    readonly showDivider = input<boolean>(false)

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

    readonly step = input<number>(1)

    readonly inputLabel = input<string>()

    readonly valueChange = output<number>()

    readonly inputChange = output<number>()

    private inputStream = new Subject<string>()

    private inputStreamSub?: Subscription

    readonly displayValue = computed(() => this.boxValue() || this.value())

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
