import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild } from '@angular/core'
import { DateTimeAdapter } from '../../class/date-time-adapter.class'
import { DateFilter, SelectMode } from '../../class/date-time.class'
import { CalendarCell, CalendarBodyComponent } from '../calendar-body/calendar-body.component'
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
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MultiYearViewComponent<T> implements OnInit, AfterContentInit {

    /**
     * The select mode of the picker;
     */
    private _selectMode: SelectMode = 'single'
    @Input()
    get selectMode(): SelectMode {
        return this._selectMode
    }

    set selectMode(val: SelectMode) {
        this._selectMode = val
        if (this.initiated) {
            this.setSelectedYears()
            this.cdRef.markForCheck()
        }
    }

    /** The currently selected date */
    private _selected?: T
    @Input()
    get selected() {
        return this._selected
    }

    set selected(value: T | undefined) {
        const oldSelected = this._selected
        value = this.dateTimeAdapter.deserialize(value)
        this._selected = this.getValidDate(value)

        if (!this.dateTimeAdapter.isSameDay(oldSelected, this._selected)) {
            this.setSelectedYears()
        }
    }

    private _selecteds = new Array<T | undefined>()
    @Input()
    get selecteds() {
        return this._selecteds
    }

    set selecteds(values: Array<T | undefined>) {
        this._selecteds = values.map((v) => {
            v = this.dateTimeAdapter.deserialize(v)
            return this.getValidDate(v)
        })
        this.setSelectedYears()
    }

    private _pickerMoment?: T
    @Input()
    get pickerMoment() {
        return this._pickerMoment
    }

    set pickerMoment(value: T | undefined) {
        const oldMoment = this._pickerMoment
        value = this.dateTimeAdapter.deserialize(value)
        this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now()

        if (oldMoment && this._pickerMoment &&
            !this.isSameYearList(oldMoment, this._pickerMoment)) {
            this.generateYearList()
        }
    }

    /**
     * A function used to filter which dates are selectable
     */
    private _dateTimeFilter?: DateFilter<T>
    @Input()
    get dateTimeFilter() {
        return this._dateTimeFilter
    }

    set dateTimeFilter(filter: DateFilter<T> | undefined) {
        this._dateTimeFilter = filter
        if (this.initiated) {
            this.generateYearList()
        }
    }

    /** The minimum selectable date */
    private _minDate?: T
    @Input()
    get min() {
        return this._minDate
    }

    set min(value: T | undefined) {
        value = this.dateTimeAdapter.deserialize(value)
        this._minDate = this.getValidDate(value)
        if (this.initiated) {
            this.generateYearList()
        }
    }

    /** The maximum selectable date */
    private _maxDate?: T
    @Input()
    get max() {
        return this._maxDate
    }

    set max(value: T | undefined) {
        value = this.dateTimeAdapter.deserialize(value)
        this._maxDate = this.getValidDate(value)
        if (this.initiated) {
            this.generateYearList()
        }
    }

    private _todayYear?: number
    get todayYear() {
        return this._todayYear
    }

    private _years?: CalendarCell[][]
    get years() {
        return this._years
    }

    private _selectedYears?: Array<number | undefined>
    get selectedYears() {
        return this._selectedYears
    }

    private initiated = false

    get isInSingleMode(): boolean {
        return this.selectMode === 'single'
    }

    get isInRangeMode(): boolean {
        return this.selectMode === 'range' || this.selectMode === 'rangeFrom'
            || this.selectMode === 'rangeTo'
    }

    get activeCell(): number | undefined {
        if (this._pickerMoment) {
            return this.dateTimeAdapter.getYear(this._pickerMoment) % (YEARS_PER_ROW * YEAR_ROWS)
        }
        return
    }

    get tableHeader(): string | undefined {
        if (this._years && this._years.length > 0) {
            return `${this._years[0][0].displayValue} ~ ${this._years[YEAR_ROWS - 1][YEARS_PER_ROW - 1].displayValue}`
        }
        return
    }

    get prevButtonLabel(): string {
        return this.pickerIntl.prevMultiYearLabel
    }

    get nextButtonLabel(): string {
        return this.pickerIntl.nextMultiYearLabel
    }

    /**
     * Callback to invoke when a new month is selected
     */
    // eslint-disable-next-line @angular-eslint/no-output-native
    @Output()
    readonly change = new EventEmitter<T>()

    /**
     * Emits the selected year
     *
     * This doesn't imply a change on the selected date.
     */
    @Output()
    readonly yearSelected = new EventEmitter<T>()

    /** Emits when any date is activated */
    @Output()
    readonly pickerMomentChange: EventEmitter<T> = new EventEmitter<T>()

    /** Emits when use keyboard enter to select a calendar cell */
    @Output()
    readonly keyboardEnter = new EventEmitter<void>()

    /** The body of calendar table */
    @ViewChild(CalendarBodyComponent, { static: true })
    private calendarBodyElm?: CalendarBodyComponent

    /** @internal */
    @HostBinding('class.nxt-dt-calendar-view')
    get calendarView(): boolean {
        return true
    }

    /** @internal */
    @HostBinding('class.nxt-dt-calendar-multi-year-view')
    get calendarMultiYearView(): boolean {
        return true
    }

    constructor(
        private readonly cdRef: ChangeDetectorRef,
        private readonly pickerIntl: DateTimeIntl,
        private readonly dateTimeAdapter: DateTimeAdapter<T>
    ) { }

    ngOnInit() {
    }

    ngAfterContentInit(): void {
        this._todayYear = this.dateTimeAdapter.getYear(this.dateTimeAdapter.now())
        this.generateYearList()
        this.initiated = true
    }

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
            this.dateTimeAdapter.getMonth(this.pickerMoment),
            1
        )
        const daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(firstDateOfMonth)
        const selected = this.dateTimeAdapter.createDate(
            year,
            this.dateTimeAdapter.getMonth(this.pickerMoment),
            Math.min(daysInMonth, this.dateTimeAdapter.getDate(this.pickerMoment)),
            this.dateTimeAdapter.getHours(this.pickerMoment),
            this.dateTimeAdapter.getMinutes(this.pickerMoment),
            this.dateTimeAdapter.getSeconds(this.pickerMoment)
        )

        this.change.emit(selected)
    }

    /**
     * Generate the previous year list
     */
    prevYearList(event: any): void {
        this._pickerMoment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1 * YEAR_ROWS * YEARS_PER_ROW)
        this.generateYearList()
        event.preventDefault()
    }

    /**
     * Generate the next year list
     */
    nextYearList(event: any): void {
        this._pickerMoment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, YEAR_ROWS * YEARS_PER_ROW)
        this.generateYearList()
        event.preventDefault()
    }

    generateYearList(): void {
        this._years = []

        const pickerMomentYear = this.dateTimeAdapter.getYear(this._pickerMoment)
        const offset = pickerMomentYear % (YEARS_PER_ROW * YEAR_ROWS)

        for (let i = 0; i < YEAR_ROWS; i++) {
            const row = []

            for (let j = 0; j < YEARS_PER_ROW; j++) {
                const year = pickerMomentYear - offset + (j + i * YEARS_PER_ROW)
                const yearCell = this.createYearCell(year)
                row.push(yearCell)
            }

            this._years.push(row)
        }

        return

    }

    /** Whether the previous period button is enabled */
    previousEnabled(): boolean {
        if (!this.min) {
            return true
        }
        return !this.min || !this.isSameYearList(this._pickerMoment, this.min)
    }

    /** Whether the next period button is enabled */
    nextEnabled(): boolean {
        return !this.max || !this.isSameYearList(this._pickerMoment, this.max)
    }

    handleCalendarKeydown(event: KeyboardEvent): void {
        let moment
        switch (event.code.toLowerCase()) {
            // minus 1 year
            case 'arrowleft':
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, -1)
                this.pickerMomentChange.emit(moment)
                break

            // add 1 year
            case 'arrowright':
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, 1)
                this.pickerMomentChange.emit(moment)
                break

            // minus 3 years
            case 'arrowup':
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, -1 * YEARS_PER_ROW)
                this.pickerMomentChange.emit(moment)
                break

            // add 3 years
            case 'arrowdown':
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, YEARS_PER_ROW)
                this.pickerMomentChange.emit(moment)
                break

            // go to the first year of the year page
            case 'home':
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment,
                    -this.dateTimeAdapter.getYear(this._pickerMoment) % (YEARS_PER_ROW * YEAR_ROWS))
                this.pickerMomentChange.emit(moment)
                break

            // go to the last year of the year page
            case 'end':
                moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment,
                    (YEARS_PER_ROW * YEAR_ROWS) - this.dateTimeAdapter.getYear(this._pickerMoment) % (YEARS_PER_ROW * YEAR_ROWS) - 1)
                this.pickerMomentChange.emit(moment)
                break

            // minus 1 year page (or 10 year pages)
            case 'pageup':
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event.altKey ? -10 * (YEARS_PER_ROW * YEAR_ROWS) : -1 * (YEARS_PER_ROW * YEAR_ROWS))
                this.pickerMomentChange.emit(moment)
                break

            // add 1 year page (or 10 year pages)
            case 'pagedown':
                moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event.altKey ? 10 * (YEARS_PER_ROW * YEAR_ROWS) : (YEARS_PER_ROW * YEAR_ROWS))
                this.pickerMomentChange.emit(moment)
                break

            case 'enter':
                this.selectYear(this.dateTimeAdapter.getYear(this._pickerMoment))
                this.keyboardEnter.emit()
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

    private setSelectedYears(): void {

        this._selectedYears = []

        if (this.isInSingleMode && this.selected) {
            this._selectedYears[0] = this.dateTimeAdapter.getYear(this.selected)
        }

        if (this.isInRangeMode && this.selecteds) {
            this._selectedYears = this.selecteds.map((selected) => {
                if (this.dateTimeAdapter.isValid(selected)) {
                    return this.dateTimeAdapter.getYear(selected)
                }
                return
            })
        }
    }

    /** Whether the given year is enabled */
    private isYearEnabled(year: number) {

        // enable if it reaches here and there's no filter defined
        if (!this.dateTimeFilter) {
            return true
        }

        const firstOfYear = this.dateTimeAdapter.createDate(year, 0, 1)

        // If any date in the year is enabled count the year as enabled.
        for (let date = firstOfYear; this.dateTimeAdapter.getYear(date) == year;
            date = this.dateTimeAdapter.addCalendarDays(date, 1)) {
            if (this.dateTimeFilter(date, 'year')) {
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
        this.calendarBodyElm?.focusActiveCell()
    }
}
