import { ChangeDetectionStrategy, Component, input, viewChild, output, linkedSignal, computed, inject } from '@angular/core'
import { DateTimeAdapter } from '../../class/date-time-adapter.class'
import { DateTimeFormats, NXT_DATE_TIME_FORMATS } from '../../class/date-time-format.class'
import { DateFilter, SelectMode } from '../../class/date-time.class'
import { CalendarBodyComponent, CalendarCell } from '../calendar-body/calendar-body.component'

/** @internal */
const DAYS_PER_WEEK = 7

/** @internal */
const WEEKS_PER_VIEW = 6

@Component({
    selector: 'nxt-date-time-month-view',
    templateUrl: './calendar-month-view.component.html',
    styleUrls: ['./calendar-month-view.component.scss'],
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CalendarBodyComponent
    ],
    host: {
        '[class.nxt-dt-calendar-view]': 'true'
    }
})
export class MonthViewComponent<T> {
    private readonly dateTimeAdapter = inject<DateTimeAdapter<T>>(DateTimeAdapter)
    private readonly dateTimeFormats = inject<DateTimeFormats>(NXT_DATE_TIME_FORMATS)

    /**
     * Whether to hide dates in other months at the start or end of the current month
     */
    readonly hideOtherMonths = input<boolean>(false)

    private _firstDayOfWeek = 0
    /**
     * Define the first day of a week
     * Sunday: 0 ~ Saturday: 6
     */
    readonly firstDayOfWeek = input<number, number>(this._firstDayOfWeek, {
        transform: (val) => {
            if (val >= 0 && val <= 6 && val !== this._firstDayOfWeek) {
                return this._firstDayOfWeek = val
            }
            return this._firstDayOfWeek
        }
    })

    /**
     * The select mode of the picker;
     */
    readonly selectMode = input<SelectMode>('single')

    /** The currently selected date */
    readonly selected = input<T | undefined, T | undefined>(undefined, {
        transform: value => {
            value = this.dateTimeAdapter.deserialize(value)
            return this.getValidDate(value)
        }
    })

    readonly selecteds = input<Array<T | undefined>, Array<T | undefined>>([], {
        transform: values => values.map(v => {
            v = this.dateTimeAdapter.deserialize(v)
            return this.getValidDate(v)
        })
    })

    readonly pickerMoment = input<T | undefined, T | undefined>(undefined, {
        transform: value => {
            value = this.dateTimeAdapter.deserialize(value)
            return this.getValidDate(value) || this.dateTimeAdapter.now()
        }
    })

    /**
     * A function used to filter which dates are selectable
     */
    readonly dateTimeFilter = input<DateFilter<T>>()

    /** The minimum selectable date */
    readonly min = input<T | undefined, T | undefined>(undefined, {
        transform: value => {
            value = this.dateTimeAdapter.deserialize(value)
            return this.getValidDate(value)
        }
    })

    /** The maximum selectable date */
    readonly max = input<T | undefined, T | undefined>(undefined, {
        transform: value => {
            value = this.dateTimeAdapter.deserialize(value)
            return this.getValidDate(value)
        }
    })

    readonly weekdays = computed(() => {
        const longWeekdays = this.dateTimeAdapter.getDayOfWeekNames('long')
        const shortWeekdays = this.dateTimeAdapter.getDayOfWeekNames('short')
        const narrowWeekdays = this.dateTimeAdapter.getDayOfWeekNames('narrow')
        const firstDayOfWeek = this.firstDayOfWeek()

        const weekdays = longWeekdays.map((long, i) => ({ long, short: shortWeekdays[i], narrow: narrowWeekdays[i] }))

        return weekdays
            .slice(firstDayOfWeek)
            .concat(weekdays.slice(0, firstDayOfWeek))
    })

    readonly _daysData = computed(() => {
        if (!this.pickerMoment()) {
            return
        }

        let todayDate: number | undefined

        // the first weekday of the month
        const startWeekdayOfMonth = this.dateTimeAdapter.getDay(
            this.firstDateOfMonth()
        )
        const firstDayOfWeek = this.firstDayOfWeek()

        // the amount of days from the first date of the month
        // if it is < 0, it means the date is in previous month
        let daysDiff =
            0 -
            ((startWeekdayOfMonth + (DAYS_PER_WEEK - firstDayOfWeek)) %
                DAYS_PER_WEEK)

        // the index of cell that contains the first date of the month
        const firstRowOffset = Math.abs(daysDiff)

        const days: CalendarCell[][] = []
        for (let i = 0; i < WEEKS_PER_VIEW; i++) {
            const week = []
            for (let j = 0; j < DAYS_PER_WEEK; j++) {
                const date = this.dateTimeAdapter.addCalendarDays(
                    this.firstDateOfMonth(),
                    daysDiff
                )
                const dateCell = this.createDateCell(date, daysDiff)

                // check if the date is today
                if (
                    this.dateTimeAdapter.isSameDay(
                        this.dateTimeAdapter.now(),
                        date
                    )
                ) {
                    todayDate = daysDiff + 1
                }

                week.push(dateCell)
                daysDiff += 1
            }
            days.push(week)
        }
        return {
            days,
            todayDate,
            firstRowOffset
        }
    })

    private _days?: CalendarCell[][]
    readonly days = computed(() => {
        const days = this._daysData()?.days
        if (days != undefined)
            return this._days = days
        return this._days
    })

    readonly activeCell = computed(() => {
        if (this.pickerMoment()) {
            return (
                this.dateTimeAdapter.getDate(this.pickerMoment()) +
                this.firstRowOffset() -
                1
            )
        }
        return
    })

    readonly isInSingleMode = computed(() => this.selectMode() === 'single')

    readonly isInRangeMode = computed(() => (
        this.selectMode() === 'range' ||
        this.selectMode() === 'rangeFrom' ||
        this.selectMode() === 'rangeTo'
    ))

    private firstDateOfMonth = linkedSignal({
        source: () => this.pickerMoment(),
        computation: (val) => this.dateTimeAdapter.createDate(
            this.dateTimeAdapter.getYear(val),
            this.dateTimeAdapter.getMonth(val),
            1
        )
    })

    private _todayDate?: number
    /**
     * The date of the month that today falls on.
     */
    readonly todayDate = computed(() => {
        const todayDate = this._daysData()?.todayDate
        if (todayDate != undefined)
            return this._todayDate = todayDate
        return this._todayDate
    })

    private _selectedDates?: Array<number | undefined>
    /**
     * An array to hold all selectedDates' value
     * the value is the day number in current month
     */
    readonly selectedDates = computed(() => {
        /**
         * Set the selectedDates value.
         * In single mode, it has only one value which represent the selected date
         * In range mode, it would has two values, one for the fromValue and the other for the toValue
         */
        let selectedDates = new Array<number | undefined>()

        if (!this.firstDateOfMonth()) {
            return this._selectedDates
        }

        if (this.isInSingleMode() && this.selected()) {
            const dayDiff = this.dateTimeAdapter.differenceInCalendarDays(
                this.selected(),
                this.firstDateOfMonth()
            ) ?? 0
            selectedDates[0] = dayDiff + 1
            return this._selectedDates = selectedDates
        }

        if (this.isInRangeMode() && this.selecteds()) {
            selectedDates = this.selecteds().map(selected => {
                if (this.dateTimeAdapter.isValid(selected)) {
                    const dayDiff = this.dateTimeAdapter.differenceInCalendarDays(
                        selected,
                        this.firstDateOfMonth()
                    ) ?? 0
                    return dayDiff + 1
                }
                return
            })
        }
        return this._selectedDates = selectedDates
    })

    private _firstRowOffset = 0
    // the index of cell that contains the first date of the month
    readonly firstRowOffset = computed(() => {
        const firstRowOffset = this._daysData()?.firstRowOffset
        if (firstRowOffset != undefined)
            return this._firstRowOffset = firstRowOffset
        return this._firstRowOffset
    })

    /**
     * Callback to invoke when a new date is selected
     */
    readonly selectedChange = output<T | undefined>()

    /**
     * Callback to invoke when any date is selected.
     */
    readonly userSelection = output<void>()

    /** Emits when any date is activated */
    readonly pickerMomentChange = output<T>()

    /** The body of calendar table */
    private readonly calendarBodyElm = viewChild(CalendarBodyComponent)

    /**
     * Handle a calendarCell selected
     */
    selectCalendarCell(cell: CalendarCell): void {
        // Cases in which the date would not be selected
        // 1, the calendar cell is NOT enabled (is NOT valid)
        // 2, the selected date is NOT in current picker's month and the hideOtherMonths is enabled
        if (!cell.enabled || (this.hideOtherMonths() && cell.out)) {
            return
        }

        this.selectDate(cell.value)
    }

    /**
     * Handle a new date selected
     */
    private selectDate(date: number): void {
        const daysDiff = date - 1
        const selected = this.dateTimeAdapter.addCalendarDays(
            this.firstDateOfMonth(),
            daysDiff
        )

        this.selectedChange.emit(selected)
        this.userSelection.emit(undefined)
    }

    /**
     * Handle keydown event on calendar body
     */
    handleCalendarKeydown(event: KeyboardEvent): void {
        let moment
        switch (event.code.toLowerCase()) {
            // minus 1 day
            case 'arrowleft':
                moment = this.dateTimeAdapter.addCalendarDays(
                    this.pickerMoment(),
                    -1
                )
                this.pickerMomentChange.emit(moment)
                break

            // add 1 day
            case 'arrowright':
                moment = this.dateTimeAdapter.addCalendarDays(
                    this.pickerMoment(),
                    1
                )
                this.pickerMomentChange.emit(moment)
                break

            // minus 1 week
            case 'arrowup':
                moment = this.dateTimeAdapter.addCalendarDays(
                    this.pickerMoment(),
                    -7
                )
                this.pickerMomentChange.emit(moment)
                break

            // add 1 week
            case 'arrowdown':
                moment = this.dateTimeAdapter.addCalendarDays(
                    this.pickerMoment(),
                    7
                )
                this.pickerMomentChange.emit(moment)
                break

            // move to first day of current month
            case 'home':
                moment = this.dateTimeAdapter.addCalendarDays(
                    this.pickerMoment(),
                    1 - this.dateTimeAdapter.getDate(this.pickerMoment())
                )
                this.pickerMomentChange.emit(moment)
                break

            // move to last day of current month
            case 'end':
                moment = this.dateTimeAdapter.addCalendarDays(
                    this.pickerMoment(),
                    this.dateTimeAdapter.getNumDaysInMonth(this.pickerMoment()) -
                    this.dateTimeAdapter.getDate(this.pickerMoment())
                )
                this.pickerMomentChange.emit(moment)
                break

            // minus 1 month (or 1 year)
            case 'pageup':
                moment = event.altKey
                    ? this.dateTimeAdapter.addCalendarYears(
                        this.pickerMoment(),
                        -1
                    )
                    : this.dateTimeAdapter.addCalendarMonths(
                        this.pickerMoment(),
                        -1
                    )
                this.pickerMomentChange.emit(moment)
                break

            // add 1 month (or 1 year)
            case 'pagedown':
                moment = event.altKey
                    ? this.dateTimeAdapter.addCalendarYears(
                        this.pickerMoment(),
                        1
                    )
                    : this.dateTimeAdapter.addCalendarMonths(
                        this.pickerMoment(),
                        1
                    )
                this.pickerMomentChange.emit(moment)
                break

            // select the pickerMoment
            case 'enter':
                if (!this.dateTimeFilter() || this.dateTimeFilter()!(this.pickerMoment(), 'date')) {
                    this.selectDate(
                        this.dateTimeAdapter.getDate(this.pickerMoment())
                    )
                }
                break
            default:
                return
        }

        this.focusActiveCell()
        event.preventDefault()
    }

    /**
     * Creates CalendarCell for days.
     */
    private createDateCell(date: T, daysDiff: number): CalendarCell {
        // total days of the month
        const daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(
            this.pickerMoment()
        )
        const dateNum = this.dateTimeAdapter.getDate(date)
        // const dateName = this.dateNames[dateNum - 1];
        const dateName = dateNum.toString()
        const ariaLabel = this.dateTimeAdapter.format(
            date,
            this.dateTimeFormats.dateA11yLabel
        )

        // check if the date if selectable
        const enabled = this.isDateEnabled(date)

        // check if date is not in current month
        const dayValue = daysDiff + 1
        const out = dayValue < 1 || dayValue > daysInMonth
        const cellClass = 'nxt-dt-day-' + this.dateTimeAdapter.getDay(date)

        return new CalendarCell(
            dayValue,
            dateName,
            ariaLabel,
            enabled,
            out,
            cellClass
        )
    }

    /**
     * Check if the date is valid
     */
    private isDateEnabled(date: T): boolean {
        return (
            !!date &&
            (!this.dateTimeFilter() || this.dateTimeFilter()!(date, 'date')) &&
            (!this.min() ||
                this.dateTimeAdapter.compare(date, this.min()) >= 0) &&
            (!this.max() ||
                this.dateTimeAdapter.compare(date, this.max()) <= 0)
        )
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

    /**
     * Check if the give dates are defined and in the same month
     */
    isSameMonth(dateLeft?: T, dateRight?: T): boolean {
        return !!(
            dateLeft &&
            dateRight &&
            this.dateTimeAdapter.isValid(dateLeft) &&
            this.dateTimeAdapter.isValid(dateRight) &&
            this.dateTimeAdapter.getYear(dateLeft) ===
            this.dateTimeAdapter.getYear(dateRight) &&
            this.dateTimeAdapter.getMonth(dateLeft) ===
            this.dateTimeAdapter.getMonth(dateRight)
        )
    }

    private focusActiveCell() {
        this.calendarBodyElm()?.focusActiveCell()
    }
}
