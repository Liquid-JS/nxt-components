import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion'
import { Directive, EventEmitter, Inject, Input, Optional } from '@angular/core'
import { DateTimeAdapter } from './date-time-adapter.class'
import { OwlDateTimeFormats, OWL_DATE_TIME_FORMATS } from './date-time-format.class'

let nextUniqueId = 0

export type PickerType = 'both' | 'calendar' | 'timer'

export type PickerMode = 'popup' | 'dialog' | 'inline'

export type SelectMode = 'single' | 'range' | 'rangeFrom' | 'rangeTo'

export type RenderItem = 'year' | 'month' | 'date'

export type DateFilter<T> = (date: T | null, forRender?: RenderItem) => boolean

@Directive()
export abstract class OwlDateTimeDirective<T> {
    /**
     * Whether to show the second's timer
     */
    private _showSecondsTimer = false
    @Input()
    get showSecondsTimer(): boolean {
        return this._showSecondsTimer
    }

    set showSecondsTimer(val: boolean) {
        this._showSecondsTimer = coerceBooleanProperty(val)
    }

    /**
     * Whether the timer is in hour12 format
     */
    private _hour12Timer = false
    @Input()
    get hour12Timer(): boolean {
        return this._hour12Timer
    }

    set hour12Timer(val: boolean) {
        this._hour12Timer = coerceBooleanProperty(val)
    }

    /**
     * The view that the calendar should start in.
     */
    @Input()
    startView: 'month' | 'year' | 'multi-years' = 'month'

    /**
     * Hours to change per step
     */
    private _stepHour = 1
    @Input()
    get stepHour(): number {
        return this._stepHour
    }

    set stepHour(val: number) {
        this._stepHour = coerceNumberProperty(val, 1)
    }

    /**
     * Minutes to change per step
     */
    private _stepMinute = 1
    @Input()
    get stepMinute(): number {
        return this._stepMinute
    }

    set stepMinute(val: number) {
        this._stepMinute = coerceNumberProperty(val, 1)
    }

    /**
     * Seconds to change per step
     */
    private _stepSecond = 1
    @Input()
    get stepSecond(): number {
        return this._stepSecond
    }

    set stepSecond(val: number) {
        this._stepSecond = coerceNumberProperty(val, 1)
    }

    /**
     * Set the first day of week
     */
    private _firstDayOfWeek = 0
    @Input()
    get firstDayOfWeek() {
        return this._firstDayOfWeek
    }

    set firstDayOfWeek(value: number) {
        value = coerceNumberProperty(value, 0)
        if (value > 6 || value < 0) {
            this._firstDayOfWeek = 0
        } else {
            this._firstDayOfWeek = value
        }
    }

    /**
     * Whether to hide dates in other months at the start or end of the current month.
     */
    private _hideOtherMonths = false
    @Input()
    get hideOtherMonths(): boolean {
        return this._hideOtherMonths
    }

    set hideOtherMonths(val: boolean) {
        this._hideOtherMonths = coerceBooleanProperty(val)
    }

    private _id: string
    get id(): string {
        return this._id
    }

    abstract get selected(): T | null

    abstract get selecteds(): Array<T | null> | null

    abstract get dateTimeFilter(): ((date: T | null) => boolean) | undefined

    abstract get maxDateTime(): T | null

    abstract get minDateTime(): T | null

    abstract get selectMode(): SelectMode | undefined

    abstract get startAt(): T | null

    abstract get opened(): boolean

    abstract get pickerMode(): PickerMode

    abstract get pickerType(): PickerType

    abstract get isInSingleMode(): boolean

    abstract get isInRangeMode(): boolean

    abstract select(date: T | Array<T | null>): void

    abstract yearSelected: EventEmitter<T>

    abstract monthSelected: EventEmitter<T>

    abstract selectYear(normalizedYear: T): void

    abstract selectMonth(normalizedMonth: T): void

    get formatString(): string {
        return this.pickerType === 'both'
            ? this.dateTimeFormats?.fullPickerInput
            : this.pickerType === 'calendar'
                ? this.dateTimeFormats?.datePickerInput
                : this.dateTimeFormats?.timePickerInput
    }

    /**
     * Date Time Checker to check if the give dateTime is selectable
     */
    public dateTimeChecker = (dateTime: T | null) => (
        !!dateTime &&
        (!this.dateTimeFilter || this.dateTimeFilter(dateTime)) &&
        (!this.minDateTime ||
            (this.dateTimeAdapter?.compare(dateTime, this.minDateTime) ?? -1) >=
            0) &&
        (!this.maxDateTime ||
            (this.dateTimeAdapter?.compare(dateTime, this.maxDateTime) ?? 1) <= 0)
    )

    get disabled(): boolean {
        return false
    }

    constructor(
        @Optional() @Inject(DateTimeAdapter<T>) protected dateTimeAdapter: DateTimeAdapter<T> | undefined,
        @Optional()
        @Inject(OWL_DATE_TIME_FORMATS)
        protected dateTimeFormats: OwlDateTimeFormats | undefined
    ) {
        if (!this.dateTimeAdapter) {
            throw Error(
                'OwlDateTimePicker: No provider found for DateTimeAdapter. You must import one of the following ' +
                'modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a ' +
                'custom implementation.'
            )
        }

        if (!this.dateTimeFormats) {
            throw Error(
                'OwlDateTimePicker: No provider found for OWL_DATE_TIME_FORMATS. You must import one of the following ' +
                'modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a ' +
                'custom implementation.'
            )
        }

        this._id = `owl-dt-picker-${nextUniqueId++}`
    }

    protected getValidDate(obj: any): T | null {
        return this.dateTimeAdapter?.isDateInstance(obj) &&
            this.dateTimeAdapter.isValid(obj)
            ? obj
            : null
    }
}
