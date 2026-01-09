import { ChangeDetectionStrategy, Component, viewChild, output, input, computed, linkedSignal, inject } from '@angular/core'
import { DateTimeAdapter } from '../../class/date-time-adapter.class'
import { DateFilter, SelectMode } from '../../class/date-time.class'
import { CalendarBodyComponent, CalendarCell } from '../calendar-body/calendar-body.component'
import { DateTimeIntl } from '../date-time-picker-intl.service'

/** @internal */
export const YEARS_PER_ROW = 3

/** @internal */
export const YEAR_ROWS = 7

@Component({
    selector: 'nxt-date-time-multi-year-view',
    templateUrl: './calendar-multi-year-view.component.html',
    styleUrls: ['./calendar-multi-year-view.component.scss'],
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CalendarBodyComponent
    ],
    host: {
        '[class.nxt-dt-calendar-view]': 'true',
        '[class.nxt-dt-calendar-multi-year-view]': 'true'
    }
})

export class MultiYearViewComponent<T> {
    private readonly pickerIntl = inject(DateTimeIntl)
    private readonly dateTimeAdapter = inject<DateTimeAdapter<T>>(DateTimeAdapter)

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

    /** Settable signal for pickerMoment */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    readonly _pickerMomentInput = input<T | undefined>(undefined, { alias: 'pickerMoment' })

    private readonly _pickerMoment = linkedSignal({
        source: () => this._pickerMomentInput(),
        computation: v => v
    })
    readonly pickerMoment = computed(() => {
        const value = this.dateTimeAdapter.deserialize(this._pickerMoment())
        return this.getValidDate(value) || this.dateTimeAdapter.now()
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

    private readonly yearsData = computed(() => {
        const todayYear = this.dateTimeAdapter.getYear(this.dateTimeAdapter.now())

        const years: CalendarCell[][] = []

        const pickerMomentYear = this.dateTimeAdapter.getYear(this.pickerMoment())
        const offset = pickerMomentYear % (YEARS_PER_ROW * YEAR_ROWS)

        for (let i = 0; i < YEAR_ROWS; i++) {
            const row = []

            for (let j = 0; j < YEARS_PER_ROW; j++) {
                const year = pickerMomentYear - offset + (j + i * YEARS_PER_ROW)
                const yearCell = this.createYearCell(year)
                row.push(yearCell)
            }

            years.push(row)
        }

        return {
            years,
            todayYear
        }
    })

    readonly years = computed(() => this.yearsData().years)

    readonly todayYear = computed(() => this.yearsData().todayYear)

    readonly isInSingleMode = computed(() => this.selectMode() === 'single')

    readonly isInRangeMode = computed(() => (
        this.selectMode() === 'range' ||
        this.selectMode() === 'rangeFrom' ||
        this.selectMode() === 'rangeTo'
    ))

    readonly selectedYears = computed(() => {
        let selectedYears = new Array<number | undefined>()

        if (this.isInSingleMode() && this.selected()) {
            selectedYears[0] = this.dateTimeAdapter.getYear(this.selected())
        }

        if (this.isInRangeMode() && this.selecteds()) {
            selectedYears = this.selecteds().map((selected) => {
                if (this.dateTimeAdapter.isValid(selected)) {
                    return this.dateTimeAdapter.getYear(selected)
                }
                return
            })
        }
        return selectedYears
    })

    readonly activeCell = computed(() => {
        if (this.pickerMoment()) {
            return this.dateTimeAdapter.getYear(this.pickerMoment()) % (YEARS_PER_ROW * YEAR_ROWS)
        }
        return
    })

    readonly tableHeader = computed(() => {
        const years = this.years()
        if (years && years.length > 0) {
            return `${years[0][0].displayValue} ~ ${years[YEAR_ROWS - 1][YEARS_PER_ROW - 1].displayValue}`
        }
        return
    })

    readonly prevButtonLabel = this.pickerIntl.prevMultiYearLabel.asReadonly()

    readonly nextButtonLabel = this.pickerIntl.nextMultiYearLabel.asReadonly()

    /**
     * Callback to invoke when a new month is selected
     */

    readonly change = output<T>()

    /**
     * Emits the selected year
     *
     * This doesn't imply a change on the selected date.
     */
    readonly yearSelected = output<T>()

    /** Emits when any date is activated */
    readonly pickerMomentChange = output<T>()

    /** Emits when use keyboard enter to select a calendar cell */
    readonly keyboardEnter = output<void>()

    /** The body of calendar table */
    private readonly calendarBodyElm = viewChild(CalendarBodyComponent)

    /**
     * Handle a calendarCell selected
     */
    selectCalendarCell(cell: CalendarCell): void {
        this.selectYear(cell.value)
    }

    private selectYear(year: number): void {
        this.yearSelected.emit(this.dateTimeAdapter.createDate(year, 0, 1))
        const firstDateOfMonth = this.dateTimeAdapter.createDate(
            year,
            this.dateTimeAdapter.getMonth(this.pickerMoment()),
            1
        )
        const daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(firstDateOfMonth)
        const selected = this.dateTimeAdapter.createDate(
            year,
            this.dateTimeAdapter.getMonth(this.pickerMoment()),
            Math.min(daysInMonth, this.dateTimeAdapter.getDate(this.pickerMoment())),
            this.dateTimeAdapter.getHours(this.pickerMoment()),
            this.dateTimeAdapter.getMinutes(this.pickerMoment()),
            this.dateTimeAdapter.getSeconds(this.pickerMoment())
        )

        this.change.emit(selected)
    }

    /**
     * Generate the previous year list
     */
    prevYearList(event: any): void {
        this._pickerMoment.set(this.dateTimeAdapter.addCalendarYears(this.pickerMoment(), -1 * YEAR_ROWS * YEARS_PER_ROW))
        event.preventDefault()
    }

    /**
     * Generate the next year list
     */
    nextYearList(event: any): void {
        this._pickerMoment.set(this.dateTimeAdapter.addCalendarYears(this.pickerMoment(), YEAR_ROWS * YEARS_PER_ROW))
        event.preventDefault()
    }

    /** Whether the previous period button is enabled */
    previousEnabled(): boolean {
        if (!this.min()) {
            return true
        }
        return !this.min() || !this.isSameYearList(this.pickerMoment(), this.min())
    }

    /** Whether the next period button is enabled */
    nextEnabled(): boolean {
        return !this.max() || !this.isSameYearList(this.pickerMoment(), this.max())
    }

    handleCalendarKeydown(event: KeyboardEvent): void {
        let moment
        switch (event.code.toLowerCase()) {
            // minus 1 year
            case 'arrowleft':
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment(), -1)
                this.pickerMomentChange.emit(moment)
                break

            // add 1 year
            case 'arrowright':
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment(), 1)
                this.pickerMomentChange.emit(moment)
                break

            // minus 3 years
            case 'arrowup':
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment(), -1 * YEARS_PER_ROW)
                this.pickerMomentChange.emit(moment)
                break

            // add 3 years
            case 'arrowdown':
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment(), YEARS_PER_ROW)
                this.pickerMomentChange.emit(moment)
                break

            // go to the first year of the year page
            case 'home':
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment(),
                    -this.dateTimeAdapter.getYear(this.pickerMoment()) % (YEARS_PER_ROW * YEAR_ROWS))
                this.pickerMomentChange.emit(moment)
                break

            // go to the last year of the year page
            case 'end':
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment(),
                    (YEARS_PER_ROW * YEAR_ROWS) - this.dateTimeAdapter.getYear(this.pickerMoment()) % (YEARS_PER_ROW * YEAR_ROWS) - 1)
                this.pickerMomentChange.emit(moment)
                break

            // minus 1 year page (or 10 year pages)
            case 'pageup':
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment(), event.altKey ? -10 * (YEARS_PER_ROW * YEAR_ROWS) : -1 * (YEARS_PER_ROW * YEAR_ROWS))
                this.pickerMomentChange.emit(moment)
                break

            // add 1 year page (or 10 year pages)
            case 'pagedown':
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment(), event.altKey ? 10 * (YEARS_PER_ROW * YEAR_ROWS) : (YEARS_PER_ROW * YEAR_ROWS))
                this.pickerMomentChange.emit(moment)
                break

            case 'enter':
                this.selectYear(this.dateTimeAdapter.getYear(this.pickerMoment()))
                this.keyboardEnter.emit(undefined)
                break

            default:
                return
        }

        this.focusActiveCell()
        event.preventDefault()
    }

    /**
     * Creates an CalendarCell for the given year.
     */
    private createYearCell(year: number): CalendarCell {
        const startDateOfYear = this.dateTimeAdapter.createDate(year, 0, 1)
        const ariaLabel = this.dateTimeAdapter.getYearName(startDateOfYear)
        const cellClass = 'nxt-dt-year-' + year
        return new CalendarCell(year, year.toString(), ariaLabel, this.isYearEnabled(year), false, cellClass)
    }

    /** Whether the given year is enabled */
    private isYearEnabled(year: number) {

        const firstOfYear = this.dateTimeAdapter.createDate(year, 0, 1)

        // If any date in the year is enabled count the year as enabled.
        for (let date = firstOfYear;
            this.dateTimeAdapter.getYear(date) == year;
            date = this.dateTimeAdapter.addCalendarDays(date, 1)
        ) {
            if (
                !!date &&
                (!this.dateTimeFilter() || this.dateTimeFilter()!(date, 'year')) &&
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

    private isSameYearList(date1?: T, date2?: T): boolean {
        return Math.floor(this.dateTimeAdapter.getYear(date1) / (YEARS_PER_ROW * YEAR_ROWS)) ===
            Math.floor(this.dateTimeAdapter.getYear(date2) / (YEARS_PER_ROW * YEAR_ROWS))
    }

    /**
     * Get a valid date object
     */
    private getValidDate(obj: any): T | undefined {
        return (this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj))
            ? obj
            : undefined
    }

    private focusActiveCell() {
        this.calendarBodyElm()?.focusActiveCell()
    }
}
