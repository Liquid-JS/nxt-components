import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion'
import { Directive, EventEmitter, Inject, Input } from '@angular/core'
import { DateTimeAdapter } from './date-time-adapter.class'
import { DateTimeFormats, NXT_DATE_TIME_FORMATS } from './date-time-format.class'

/** @internal */
let nextUniqueId = 0

export type PickerType = 'both' | 'calendar' | 'timer'

export type PickerMode = 'popup' | 'dialog' | 'inline'

export type SelectMode = 'single' | 'range' | 'rangeFrom' | 'rangeTo'

export type RenderItem = 'year' | 'month' | 'date'

export type ViewType = 'month' | 'year' | 'multi-years'

export type DateFilter<T> = (date?: T, forRender?: RenderItem) => boolean

@Directive()
export abstract class DateTimeDirective<T> {
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
    startView: ViewType = 'month'

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

    abstract get selected(): T | undefined

    abstract get selecteds(): Array<T | undefined>

    abstract get dateTimeFilter(): ((date: T | undefined) => boolean) | undefined

    abstract get max(): T | undefined

    abstract get min(): T | undefined

    abstract get selectMode(): SelectMode | undefined

    abstract get startAt(): T | undefined

    abstract get opened(): boolean

    abstract get pickerMode(): PickerMode

    abstract get pickerType(): PickerType

    abstract get isInSingleMode(): boolean

    abstract get isInRangeMode(): boolean

    abstract select(date: T | Array<T | undefined>): void

    abstract yearSelected: EventEmitter<T>

    abstract monthSelected: EventEmitter<T>

    abstract selectYear(normalizedYear: T): void

    abstract selectMonth(normalizedMonth: T): void

    get formatString(): string {
        return this.pickerType === 'both'
            ? this.dateTimeFormats.fullPickerInput
            : this.pickerType === 'calendar'
                ? this.dateTimeFormats.datePickerInput
                : this.dateTimeFormats.timePickerInput
    }

    /**
     * Date Time Checker to check if the give dateTime is selectable
     */
    dateTimeChecker = (dateTime: T | undefined) => (
        !!dateTime &&
        (!this.dateTimeFilter || this.dateTimeFilter(dateTime)) &&
        (!this.min || this.dateTimeAdapter.compare(dateTime, this.min) >= 0) &&
        (!this.max || this.dateTimeAdapter.compare(dateTime, this.max) <= 0)
    )

    get disabled(): boolean {
        return false
    }

    constructor(
        protected readonly dateTimeAdapter: DateTimeAdapter<T>,
        @Inject(NXT_DATE_TIME_FORMATS)
        protected readonly dateTimeFormats: DateTimeFormats
    ) {
        this._id = `nxt-dt-picker-${nextUniqueId++}`
    }

    protected getValidDate(obj: any): T | undefined {
        return this.dateTimeAdapter.isDateInstance(obj) &&
            this.dateTimeAdapter.isValid(obj)
            ? obj
            : undefined
    }
}
