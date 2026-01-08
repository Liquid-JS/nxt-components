import { ChangeDetectionStrategy, Component, Inject, viewChild, output, input, computed } from '@angular/core'
import { DateTimeAdapter } from '../../class/date-time-adapter.class'
import { DateTimeFormats, NXT_DATE_TIME_FORMATS } from '../../class/date-time-format.class'
import { DateFilter, SelectMode } from '../../class/date-time.class'
import { CalendarBodyComponent, CalendarCell } from '../calendar-body/calendar-body.component'

/** @internal */
const MONTHS_PER_YEAR = 12

/** @internal */
const MONTHS_PER_ROW = 3

@Component({
    selector: 'nxt-date-time-year-view',
    templateUrl: './calendar-year-view.component.html',
    styleUrls: ['./calendar-year-view.component.scss'],
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CalendarBodyComponent
    ],
    host: {
        '[class.nxt-dt-calendar-view]': 'true'
    }
})
export class YearViewComponent<T> {
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

    private readonly monthNames = this.dateTimeAdapter.getMonthNames('short')

    private readonly monthsData = computed(() => {
        if (!this.pickerMoment()) {
            return
        }

        const todayMonth = this.getMonthInCurrentYear(
            this.dateTimeAdapter.now()
        )

        const months: CalendarCell[][] = []
        for (let i = 0; i < MONTHS_PER_YEAR / MONTHS_PER_ROW; i++) {
            const row = []

            for (let j = 0; j < MONTHS_PER_ROW; j++) {
                const month = j + i * MONTHS_PER_ROW
                const monthCell = this.createMonthCell(month)
                row.push(monthCell)
            }

            months.push(row)
        }

        return {
            months,
            todayMonth
        }
    })

    private _months?: CalendarCell[][]
    readonly months = computed(() => {
        const months = this.monthsData()?.months
        if (months != undefined)
            return this._months = months
        return this._months
    })

    readonly activeCell = computed(() => {
        if (this.pickerMoment()) {
            return this.dateTimeAdapter.getMonth(this.pickerMoment())
        }
        return
    })

    readonly isInSingleMode = computed(() => this.selectMode() === 'single')

    readonly isInRangeMode = computed(() => (
        this.selectMode() === 'range' ||
        this.selectMode() === 'rangeFrom' ||
        this.selectMode() === 'rangeTo'
    ))

    private _todayMonth?: number
    readonly todayMonth = computed(() => {
        const todayMonth = this.monthsData()?.todayMonth
        if (todayMonth != undefined)
            return this._todayMonth = todayMonth
        return this._todayMonth
    })

    /**
     * An array to hold all selectedDates' month value
     * the value is the month number in current year
     */
    readonly selectedMonths = computed(() => {
        /**
         * Set the selectedMonths value
         * In single mode, it has only one value which represent the month the selected date in
         * In range mode, it would has two values, one for the month the fromValue in and the other for the month the toValue in
         */
        const selectedMonths: Array<number | undefined> = []
        if (this.isInSingleMode() && this.selected()) {
            selectedMonths[0] = this.getMonthInCurrentYear(this.selected())
        }

        if (this.isInRangeMode() && this.selecteds()) {
            selectedMonths[0] = this.getMonthInCurrentYear(
                this.selecteds()[0]
            )
            selectedMonths[1] = this.getMonthInCurrentYear(
                this.selecteds()[1]
            )
        }
        return selectedMonths
    })

    /**
     * Callback to invoke when a new month is selected
     */
    readonly change = output<T>()

    /**
     * Emits the selected year
     *
     * This doesn't imply a change on the selected date.
     */
    readonly monthSelected = output<T>()

    /** Emits when any date is activated */
    readonly pickerMomentChange = output<T>()

    /** Emits when use keyboard enter to select a calendar cell */
    readonly keyboardEnter = output<void>()

    /** The body of calendar table */
    private readonly calendarBodyElm = viewChild(CalendarBodyComponent)

    constructor(
        private readonly dateTimeAdapter: DateTimeAdapter<T>,
        @Inject(NXT_DATE_TIME_FORMATS)
        private readonly dateTimeFormats: DateTimeFormats
    ) { }

    /**
     * Handle a calendarCell selected
     */
    selectCalendarCell(cell: CalendarCell): void {
        this.selectMonth(cell.value)
    }

    /**
     * Handle a new month selected
     */
    private selectMonth(month: number): void {
        const firstDateOfMonth = this.dateTimeAdapter.createDate(
            this.dateTimeAdapter.getYear(this.pickerMoment()),
            month,
            1
        )

        this.monthSelected.emit(firstDateOfMonth)

        const daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(
            firstDateOfMonth
        )
        const result = this.dateTimeAdapter.createDate(
            this.dateTimeAdapter.getYear(this.pickerMoment()),
            month,
            Math.min(
                daysInMonth,
                this.dateTimeAdapter.getDate(this.pickerMoment())
            ),
            this.dateTimeAdapter.getHours(this.pickerMoment()),
            this.dateTimeAdapter.getMinutes(this.pickerMoment()),
            this.dateTimeAdapter.getSeconds(this.pickerMoment())
        )

        this.change.emit(result)
    }

    /**
     * Handle keydown event on calendar body
     */
    handleCalendarKeydown(event: KeyboardEvent): void {
        let moment
        switch (event.code.toLowerCase()) {
            // minus 1 month
            case 'arrowleft':
                moment = this.dateTimeAdapter.addCalendarMonths(
                    this.pickerMoment(),
                    -1
                )
                this.pickerMomentChange.emit(moment)
                break

            // add 1 month
            case 'arrowright':
                moment = this.dateTimeAdapter.addCalendarMonths(
                    this.pickerMoment(),
                    1
                )
                this.pickerMomentChange.emit(moment)
                break

            // minus 3 months
            case 'arrowup':
                moment = this.dateTimeAdapter.addCalendarMonths(
                    this.pickerMoment(),
                    -3
                )
                this.pickerMomentChange.emit(moment)
                break

            // add 3 months
            case 'arrowdown':
                moment = this.dateTimeAdapter.addCalendarMonths(
                    this.pickerMoment(),
                    3
                )
                this.pickerMomentChange.emit(moment)
                break

            // move to first month of current year
            case 'home':
                moment = this.dateTimeAdapter.addCalendarMonths(
                    this.pickerMoment(),
                    -this.dateTimeAdapter.getMonth(this.pickerMoment())
                )
                this.pickerMomentChange.emit(moment)
                break

            // move to last month of current year
            case 'end':
                moment = this.dateTimeAdapter.addCalendarMonths(
                    this.pickerMoment(),
                    11 - this.dateTimeAdapter.getMonth(this.pickerMoment())
                )
                this.pickerMomentChange.emit(moment)
                break

            // minus 1 year (or 10 year)
            case 'pageup':
                moment = this.dateTimeAdapter.addCalendarYears(
                    this.pickerMoment(),
                    event.altKey ? -10 : -1
                )
                this.pickerMomentChange.emit(moment)
                break

            // add 1 year (or 10 year)
            case 'pagedown':
                moment = this.dateTimeAdapter.addCalendarYears(
                    this.pickerMoment(),
                    event.altKey ? 10 : 1
                )
                this.pickerMomentChange.emit(moment)
                break

            // Select current month
            case 'enter':
                this.selectMonth(
                    this.dateTimeAdapter.getMonth(this.pickerMoment())
                )
                this.keyboardEnter.emit(undefined)
                break
            default:
                return
        }

        this.focusActiveCell()
        event.preventDefault()
    }

    /**
     * Creates an CalendarCell for the given month.
     */
    private createMonthCell(month: number): CalendarCell {
        const startDateOfMonth = this.dateTimeAdapter.createDate(
            this.dateTimeAdapter.getYear(this.pickerMoment()),
            month,
            1
        )
        const ariaLabel = this.dateTimeAdapter.format(
            startDateOfMonth,
            this.dateTimeFormats.monthYearA11yLabel
        )
        const cellClass = 'nxt-dt-month-' + month
        return new CalendarCell(
            month,
            this.monthNames[month],
            ariaLabel,
            this.isMonthEnabled(month),
            false,
            cellClass
        )
    }

    /**
     * Check if the given month is enable
     */
    private isMonthEnabled(month: number): boolean {
        const firstDateOfMonth = this.dateTimeAdapter.createDate(
            this.dateTimeAdapter.getYear(this.pickerMoment()),
            month,
            1
        )

        // If any date in the month is selectable,
        // we count the month as enable
        for (
            let date = firstDateOfMonth;
            this.dateTimeAdapter.getMonth(date) === month;
            date = this.dateTimeAdapter.addCalendarDays(date, 1)
        ) {
            if (
                !!date &&
                (!this.dateTimeFilter() || this.dateTimeFilter()!(date, 'month')) &&
                (!this.min() ||
                    this.dateTimeAdapter.compare(date, this.min()) >= 0) &&
                (!this.max() ||
                    this.dateTimeAdapter.compare(date, this.max()) <= 0)
            ) {
                return true
            }
        }

        return false
    }

    /**
     * Gets the month in this year that the given Date falls on.
     * Returns undefined if the given Date is in another year.
     */
    private getMonthInCurrentYear(date?: T): number | undefined {
        if (this.getValidDate(date) && this.getValidDate(this.pickerMoment())) {
            const result = this.dateTimeAdapter.compareYear(
                date,
                this.pickerMoment()
            )

            // < 0 : the given date's year is before pickerMoment's year, we return -1 as selected month value.
            // > 0 : the given date's year is after pickerMoment's year, we return 12 as selected month value.
            // 0 : the give date's year is same as the pickerMoment's year, we return the actual month value.
            if (result < 0) {
                return -1
            } else if (result > 0) {
                return 12
            } else {
                return this.dateTimeAdapter.getMonth(date)
            }
        }
        return
    }

    /**
     * Check the given dates are in the same year
     */
    private hasSameYear(dateLeft?: T, dateRight?: T) {
        return !!(
            dateLeft &&
            dateRight &&
            this.dateTimeAdapter.getYear(dateLeft) ===
            this.dateTimeAdapter.getYear(dateRight)
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

    private focusActiveCell() {
        this.calendarBodyElm()?.focusActiveCell()
    }
}
