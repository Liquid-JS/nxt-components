import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, NgZone, OnInit, computed, input, output, signal } from '@angular/core'
import { take } from 'rxjs/operators'
import { DateTimeAdapter } from '../../class/date-time-adapter.class'
import { DateTimeIntl } from '../date-time-picker-intl.service'
import { TimerBoxComponent } from '../timer-box/timer-box.component'

@Component({
    selector: 'nxt-date-time-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss'],
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        TimerBoxComponent
    ]
})
export class TimerComponent<T> implements OnInit {
    /** The current picker moment */
    readonly pickerMoment = input<T | undefined, T | undefined>(undefined, {
        transform: value => {
            value = this.dateTimeAdapter.deserialize(value)
            return this.getValidDate(value) || this.dateTimeAdapter.now()
        }
    })

    /** The minimum selectable date time */
    readonly min = input<T | undefined, T | undefined>(undefined, {
        transform: value => {
            value = this.dateTimeAdapter.deserialize(value)
            return this.getValidDate(value)
        }
    })

    /** The maximum selectable date time */
    readonly max = input<T | undefined, T | undefined>(undefined, {
        transform: value => {
            value = this.dateTimeAdapter.deserialize(value)
            return this.getValidDate(value)
        }
    })

    private readonly isPM = signal(false) // a flag indicates the current timer moment is in PM or AM

    /**
     * Whether to show the second's timer
     */
    readonly showSecondsTimer = input<boolean>(false)

    /**
     * Whether the timer is in hour12 format
     */
    readonly hour12Timer = input<boolean>(false)

    /**
     * Hours to change per step
     */
    readonly stepHour = input(1)

    /**
     * Minutes to change per step
     */
    readonly stepMinute = input(1)

    /**
     * Seconds to change per step
     */
    readonly stepSecond = input(1)

    readonly hourValue = computed(() => this.dateTimeAdapter.getHours(this.pickerMoment()))

    /**
     * The value would be displayed in hourBox.
     * We need this because the value displayed in hourBox it not
     * the same as the hourValue when the timer is in hour12Timer mode.
     */
    readonly hourBoxValue = computed(() => {
        let hours = this.hourValue()

        if (!this.hour12Timer()) {
            return hours
        } else {
            if (hours === 0) {
                hours = 12
                this.isPM.set(false)
            } else if (hours > 0 && hours < 12) {
                this.isPM.set(false)
            } else if (hours === 12) {
                this.isPM.set(true)
            } else if (hours > 12 && hours < 24) {
                hours = hours - 12
                this.isPM.set(true)
            }

            return hours
        }
    })

    readonly minuteValue = computed(() => this.dateTimeAdapter.getMinutes(this.pickerMoment()))

    readonly secondValue = computed(() => this.dateTimeAdapter.getSeconds(this.pickerMoment()))

    readonly upHourButtonLabel = this.pickerIntl.upHourLabel.asReadonly()

    readonly downHourButtonLabel = this.pickerIntl.downHourLabel.asReadonly()

    readonly upMinuteButtonLabel = this.pickerIntl.upMinuteLabel.asReadonly()

    readonly downMinuteButtonLabel = this.pickerIntl.downMinuteLabel.asReadonly()

    readonly upSecondButtonLabel = this.pickerIntl.upSecondLabel.asReadonly()

    readonly downSecondButtonLabel = this.pickerIntl.downSecondLabel.asReadonly()

    readonly hour12ButtonLabel = computed(() => this.isPM()
        ? this.pickerIntl.hour12PMLabel()
        : this.pickerIntl.hour12AMLabel())

    readonly selectedChange = output<T>()

    /** @internal */
    @HostBinding('class.nxt-dt-timer')
    get timerClass(): boolean {
        return true
    }

    /** @internal */
    @HostBinding('attr.tabindex')
    get timeTabIndex(): number {
        return -1
    }

    constructor(
        private readonly ngZone: NgZone,
        private readonly elmRef: ElementRef<HTMLElement>,
        private readonly pickerIntl: DateTimeIntl,
        private readonly cdRef: ChangeDetectorRef,
        private readonly dateTimeAdapter: DateTimeAdapter<T>
    ) { }

    ngOnInit() { }

    /**
     * Focus to the host element
     */
    focus() {
        this.ngZone.runOutsideAngular(() => {
            this.ngZone.onStable
                .asObservable()
                .pipe(take(1))
                .subscribe(() => {
                    this.elmRef.nativeElement.focus()
                })
        })
    }

    /**
     * Set the hour value via typing into timer box input
     * We need this to handle the hour value when the timer is in hour12 mode
     */
    setHourValueViaInput(hours: number): void {
        const hour12Timer = this.hour12Timer()
        if (hour12Timer && this.isPM() && hours >= 1 && hours <= 11) {
            hours = hours + 12
        } else if (hour12Timer && !this.isPM() && hours === 12) {
            hours = 0
        }

        this.setHourValue(hours)
    }

    setHourValue(hours: number): void {
        const m = this.dateTimeAdapter.setHours(this.pickerMoment(), hours)
        this.selectedChange.emit(m)
    }

    setMinuteValue(minutes: number): void {
        const m = this.dateTimeAdapter.setMinutes(this.pickerMoment(), minutes)
        this.selectedChange.emit(m)
    }

    setSecondValue(seconds: number): void {
        const m = this.dateTimeAdapter.setSeconds(this.pickerMoment(), seconds)
        this.selectedChange.emit(m)
    }

    setMeridiem(event: any): void {
        this.isPM.set(!this.isPM())

        let hours = this.hourValue()
        if (this.isPM()) {
            hours = hours + 12
        } else {
            hours = hours - 12
        }

        if (hours >= 0 && hours <= 23) {
            this.setHourValue(hours)
        }

        event.preventDefault()
    }

    /**
     * Check if the up hour button is enabled
     */
    readonly upHourEnabled = computed(() => (
        !this.max() ||
        this.compareHours(this.stepHour(), this.max()!) < 1
    ))
    /**
     * Check if the down hour button is enabled
     */
    readonly downHourEnabled = computed(() => (
        !this.min() ||
        this.compareHours(-this.stepHour(), this.min()!) > -1
    ))

    /**
     * Check if the up minute button is enabled
     */
    readonly upMinuteEnabled = computed(() => (
        !this.max() ||
        this.compareMinutes(this.stepMinute(), this.max()!) < 1
    ))

    /**
     * Check if the down minute button is enabled
     */
    readonly downMinuteEnabled = computed(() => (
        !this.min() ||
        this.compareMinutes(-this.stepMinute(), this.min()!) > -1
    ))

    /**
     * Check if the up second button is enabled
     */
    readonly upSecondEnabled = computed(() => (
        !this.max() ||
        this.compareSeconds(this.stepSecond(), this.max()!) < 1
    ))

    /**
     * Check if the down second button is enabled
     */
    readonly downSecondEnabled = computed(() => (
        !this.min() ||
        this.compareSeconds(-this.stepSecond(), this.min()!) > -1
    ))

    /**
     * PickerMoment's hour value +/- certain amount and compare it to the give date
     * 1 is after the comparedDate
     * -1 is before the comparedDate
     * 0 is equal the comparedDate
     */
    private compareHours(amount: number, comparedDate: T): number {
        const hours = this.dateTimeAdapter.getHours(this.pickerMoment()) + amount
        const result = this.dateTimeAdapter.setHours(this.pickerMoment(), hours)
        return this.dateTimeAdapter.compare(result, comparedDate)
    }

    /**
     * PickerMoment's minute value +/- certain amount and compare it to the give date
     * 1 is after the comparedDate
     * -1 is before the comparedDate
     * 0 is equal the comparedDate
     */
    private compareMinutes(amount: number, comparedDate: T): number {
        const minutes =
            this.dateTimeAdapter.getMinutes(this.pickerMoment()) + amount
        const result = this.dateTimeAdapter.setMinutes(
            this.pickerMoment(),
            minutes
        )
        return this.dateTimeAdapter.compare(result, comparedDate)
    }

    /**
     * PickerMoment's second value +/- certain amount and compare it to the give date
     * 1 is after the comparedDate
     * -1 is before the comparedDate
     * 0 is equal the comparedDate
     */
    private compareSeconds(amount: number, comparedDate: T): number {
        const seconds =
            this.dateTimeAdapter.getSeconds(this.pickerMoment()) + amount
        const result = this.dateTimeAdapter.setSeconds(
            this.pickerMoment(),
            seconds
        )
        return this.dateTimeAdapter.compare(result, comparedDate)
    }

    /**
     * Get a valid date object
     */
    private getValidDate(obj: any): T | undefined {
        return this.dateTimeAdapter.isDateInstance(obj) &&
            this.dateTimeAdapter.isValid(obj)
            ? obj
            : undefined
    }
}
