import { Directive, EventEmitter, Inject, input } from '@angular/core'
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
     * When true, shows a timer to configure the seconds value
     */
    readonly showSecondsTimer = input(false)

    /**
     * When true, the timer will be in 12-hour format mode
     */
    readonly hour12Timer = input(false)

    /**
     * The view that the calendar should start on
     */
    readonly startView = input<ViewType>('month')

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

    /**
     * Set the first day of week
     *
     * Valid values are from 0 [Sunday] to 6 [Saturday]
     */
    readonly firstDayOfWeek = input(0)

    /**
     * If true, don't show dates from preious / next month on the calendar month view
     */
    readonly hideOtherMonths = input(false)

    readonly id = `nxt-dt-picker-${nextUniqueId++}`

    abstract get selected(): T | undefined

    abstract get selecteds(): Array<T | undefined>

    abstract get dateTimeFilter(): DateFilter<T> | undefined

    abstract get max(): T | undefined

    abstract get min(): T | undefined

    abstract get selectMode(): SelectMode | undefined

    abstract get startAt(): T | undefined

    abstract get isOpen(): boolean

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
    ) { }

    protected getValidDate(obj: any): T | undefined {
        return this.dateTimeAdapter.isDateInstance(obj) &&
            this.dateTimeAdapter.isValid(obj)
            ? obj
            : undefined
    }
}
