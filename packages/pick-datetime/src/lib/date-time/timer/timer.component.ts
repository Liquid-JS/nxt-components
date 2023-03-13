import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, Input, NgZone, OnInit, Output } from '@angular/core'
import { take } from 'rxjs/operators'
import { DateTimeAdapter } from '../../class/date-time-adapter.class'
import { DateTimeIntl } from '../date-time-picker-intl.service'

@Component({
    selector: 'nxt-date-time-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss'],
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent<T> implements OnInit {
    /** The current picker moment */
    private _pickerMoment?: T
    @Input()
    get pickerMoment() {
        return this._pickerMoment
    }

    set pickerMoment(value: T | undefined) {
        value = this.dateTimeAdapter.deserialize(value)
        this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now()
    }

    /** The minimum selectable date time. */
    private _minDateTime?: T
    @Input()
    get min() {
        return this._minDateTime
    }

    set min(value: T | undefined) {
        value = this.dateTimeAdapter.deserialize(value)
        this._minDateTime = this.getValidDate(value)
    }

    /** The maximum selectable date time. */
    private _maxDateTime?: T
    @Input()
    get max() {
        return this._maxDateTime
    }

    set max(value: T | undefined) {
        value = this.dateTimeAdapter.deserialize(value)
        this._maxDateTime = this.getValidDate(value)
    }

    private isPM: boolean = false // a flag indicates the current timer moment is in PM or AM

    /**
     * Whether to show the second's timer
     */
    @Input()
    showSecondsTimer: boolean = false

    /**
     * Whether the timer is in hour12 format
     */
    @Input()
    hour12Timer: boolean = false

    /**
     * Hours to change per step
     */
    @Input()
    stepHour = 1

    /**
     * Minutes to change per step
     */
    @Input()
    stepMinute = 1

    /**
     * Seconds to change per step
     */
    @Input()
    stepSecond = 1

    get hourValue(): number {
        return this.dateTimeAdapter.getHours(this.pickerMoment)
    }

    /**
     * The value would be displayed in hourBox.
     * We need this because the value displayed in hourBox it not
     * the same as the hourValue when the timer is in hour12Timer mode.
     * */
    get hourBoxValue(): number {
        let hours = this.hourValue

        if (!this.hour12Timer) {
            return hours
        } else {
            if (hours === 0) {
                hours = 12
                this.isPM = false
            } else if (hours > 0 && hours < 12) {
                this.isPM = false
            } else if (hours === 12) {
                this.isPM = true
            } else if (hours > 12 && hours < 24) {
                hours = hours - 12
                this.isPM = true
            }

            return hours
        }
    }

    get minuteValue(): number {
        return this.dateTimeAdapter.getMinutes(this.pickerMoment)
    }

    get secondValue(): number {
        return this.dateTimeAdapter.getSeconds(this.pickerMoment)
    }

    get upHourButtonLabel(): string {
        return this.pickerIntl.upHourLabel
    }

    get downHourButtonLabel(): string {
        return this.pickerIntl.downHourLabel
    }

    get upMinuteButtonLabel(): string {
        return this.pickerIntl.upMinuteLabel
    }

    get downMinuteButtonLabel(): string {
        return this.pickerIntl.downMinuteLabel
    }

    get upSecondButtonLabel(): string {
        return this.pickerIntl.upSecondLabel
    }

    get downSecondButtonLabel(): string {
        return this.pickerIntl.downSecondLabel
    }

    get hour12ButtonLabel(): string {
        return this.isPM
            ? this.pickerIntl.hour12PMLabel
            : this.pickerIntl.hour12AMLabel
    }

    @Output()
    readonly selectedChange = new EventEmitter<T>()

    @HostBinding('class.nxt-dt-timer')
    get timerClass(): boolean {
        return true
    }

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
     * */
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
     * */
    setHourValueViaInput(hours: number): void {
        if (this.hour12Timer && this.isPM && hours >= 1 && hours <= 11) {
            hours = hours + 12
        } else if (this.hour12Timer && !this.isPM && hours === 12) {
            hours = 0
        }

        this.setHourValue(hours)
    }

    setHourValue(hours: number): void {
        const m = this.dateTimeAdapter.setHours(this.pickerMoment, hours)
        this.selectedChange.emit(m)
        this.cdRef.markForCheck()
    }

    setMinuteValue(minutes: number): void {
        const m = this.dateTimeAdapter.setMinutes(this.pickerMoment, minutes)
        this.selectedChange.emit(m)
        this.cdRef.markForCheck()
    }

    setSecondValue(seconds: number): void {
        const m = this.dateTimeAdapter.setSeconds(this.pickerMoment, seconds)
        this.selectedChange.emit(m)
        this.cdRef.markForCheck()
    }

    setMeridiem(event: any): void {
        this.isPM = !this.isPM

        let hours = this.hourValue
        if (this.isPM) {
            hours = hours + 12
        } else {
            hours = hours - 12
        }

        if (hours >= 0 && hours <= 23) {
            this.setHourValue(hours)
        }

        this.cdRef.markForCheck()
        event.preventDefault()
    }

    /**
     * Check if the up hour button is enabled
     */
    upHourEnabled(): boolean {
        return (
            !this.max ||
            this.compareHours(this.stepHour, this.max) < 1
        )
    }

    /**
     * Check if the down hour button is enabled
     */
    downHourEnabled(): boolean {
        return (
            !this.min ||
            this.compareHours(-this.stepHour, this.min) > -1
        )
    }

    /**
     * Check if the up minute button is enabled
     */
    upMinuteEnabled(): boolean {
        return (
            !this.max ||
            this.compareMinutes(this.stepMinute, this.max) < 1
        )
    }

    /**
     * Check if the down minute button is enabled
     */
    downMinuteEnabled(): boolean {
        return (
            !this.min ||
            this.compareMinutes(-this.stepMinute, this.min) > -1
        )
    }

    /**
     * Check if the up second button is enabled
     */
    upSecondEnabled(): boolean {
        return (
            !this.max ||
            this.compareSeconds(this.stepSecond, this.max) < 1
        )
    }

    /**
     * Check if the down second button is enabled
     */
    downSecondEnabled(): boolean {
        return (
            !this.min ||
            this.compareSeconds(-this.stepSecond, this.min) > -1
        )
    }

    /**
     * PickerMoment's hour value +/- certain amount and compare it to the give date
     * 1 is after the comparedDate
     * -1 is before the comparedDate
     * 0 is equal the comparedDate
     * */
    private compareHours(amount: number, comparedDate: T): number {
        const hours = this.dateTimeAdapter.getHours(this.pickerMoment) + amount
        const result = this.dateTimeAdapter.setHours(this.pickerMoment, hours)
        return this.dateTimeAdapter.compare(result, comparedDate)
    }

    /**
     * PickerMoment's minute value +/- certain amount and compare it to the give date
     * 1 is after the comparedDate
     * -1 is before the comparedDate
     * 0 is equal the comparedDate
     * */
    private compareMinutes(amount: number, comparedDate: T): number {
        const minutes =
            this.dateTimeAdapter.getMinutes(this.pickerMoment) + amount
        const result = this.dateTimeAdapter.setMinutes(
            this.pickerMoment,
            minutes
        )
        return this.dateTimeAdapter.compare(result, comparedDate)
    }

    /**
     * PickerMoment's second value +/- certain amount and compare it to the give date
     * 1 is after the comparedDate
     * -1 is before the comparedDate
     * 0 is equal the comparedDate
     * */
    private compareSeconds(amount: number, comparedDate: T): number {
        const seconds =
            this.dateTimeAdapter.getSeconds(this.pickerMoment) + amount
        const result = this.dateTimeAdapter.setSeconds(
            this.pickerMoment,
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
