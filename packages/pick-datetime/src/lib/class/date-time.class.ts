import { Directive, OutputEmitterRef, input, Signal, computed, signal, inject } from '@angular/core'
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
    protected readonly dateTimeAdapter = inject<DateTimeAdapter<T>>(DateTimeAdapter)
    protected readonly dateTimeFormats = inject<DateTimeFormats>(NXT_DATE_TIME_FORMATS)

    /**
     * When true, shows a timer to configure the seconds value
     */
    readonly showSecondsTimer = input<boolean>(false)

    /**
     * When true, the timer will be in 12-hour format mode
     */
    readonly hour12Timer = input<boolean>(false)

    /**
     * The view that the calendar should start on
     */
    readonly startView = input<ViewType>('month')

    /**
     * Hours to change per step
     */
    readonly stepHour = input<number>(1)

    /**
     * Minutes to change per step
     */
    readonly stepMinute = input<number>(1)

    /**
     * Seconds to change per step
     */
    readonly stepSecond = input<number>(1)

    /**
     * Set the first day of week
     *
     * Valid values are from 0 [Sunday] to 6 [Saturday]
     */
    readonly firstDayOfWeek = input<number>(0)

    /**
     * If true, don't show dates from preious / next month on the calendar month view
     */
    readonly hideOtherMonths = input<boolean>(false)

    readonly id = `nxt-dt-picker-${nextUniqueId++}`

    abstract selected: Signal<T | undefined>

    abstract selecteds: Signal<Array<T | undefined>>

    abstract dateTimeFilter: Signal<DateFilter<T> | undefined>

    abstract max: Signal<T | undefined>

    abstract min: Signal<T | undefined>

    abstract selectMode: Signal<SelectMode | undefined>

    abstract startAt: Signal<T | undefined>

    abstract isOpen: Signal<boolean>

    abstract pickerMode: Signal<PickerMode>

    abstract pickerType: Signal<PickerType>

    abstract isInSingleMode: Signal<boolean>

    abstract isInRangeMode: Signal<boolean>

    abstract disabled: Signal<boolean>

    abstract select(date: T | Array<T | undefined>): void

    abstract yearSelected: OutputEmitterRef<T>

    abstract monthSelected: OutputEmitterRef<T>

    abstract selectYear(normalizedYear: T): void

    abstract selectMonth(normalizedMonth: T): void

    readonly formatString = computed(() => this.pickerType() === 'both'
        ? this.dateTimeFormats.fullPickerInput
        : this.pickerType() === 'calendar'
            ? this.dateTimeFormats.datePickerInput
            : this.dateTimeFormats.timePickerInput)

    /**
     * Date Time Checker to check if the give dateTime is selectable
     */
    readonly dateTimeChecker = signal((dateTime: T | undefined) => (
        !!dateTime &&
        (!this.dateTimeFilter() || this.dateTimeFilter()!(dateTime)) &&
        (!this.min() || this.dateTimeAdapter.compare(dateTime, this.min()) >= 0) &&
        (!this.max() || this.dateTimeAdapter.compare(dateTime, this.max()) <= 0)
    ))

    protected getValidDate(obj: any): T | undefined {
        return this.dateTimeAdapter.isDateInstance(obj) &&
            this.dateTimeAdapter.isValid(obj)
            ? obj
            : undefined
    }
}
