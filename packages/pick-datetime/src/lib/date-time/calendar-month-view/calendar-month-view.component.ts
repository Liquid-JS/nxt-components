import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Inject, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core'
import { Subscription } from 'rxjs'
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
    standalone: false
})
export class MonthViewComponent<T> implements OnInit, AfterContentInit, OnDestroy {
    /**
     * Whether to hide dates in other months at the start or end of the current month
     */
    @Input()
    hideOtherMonths: boolean = false

    /**
     * Define the first day of a week
     * Sunday: 0 ~ Saturday: 6
     */
    private _firstDayOfWeek: number = 0
    @Input()
    get firstDayOfWeek(): number {
        return this._firstDayOfWeek
    }

    set firstDayOfWeek(val: number) {
        if (val >= 0 && val <= 6 && val !== this._firstDayOfWeek) {
            this._firstDayOfWeek = val

            if (this.initiated) {
                this.generateWeekDays()
                this.generateCalendar()
                this.cdRef.markForCheck()
            }
        }
    }

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
            this.generateCalendar()
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
            this.setSelectedDates()
        }
    }

    private _selecteds = new Array<T | undefined>()
    @Input()
    get selecteds() {
        return this._selecteds || []
    }

    set selecteds(values: Array<T | undefined>) {
        this._selecteds = values.map(v => {
            v = this.dateTimeAdapter.deserialize(v)
            return this.getValidDate(v)
        })
        this.setSelectedDates()
    }

    private _pickerMoment?: T
    @Input()
    get pickerMoment() {
        return this._pickerMoment
    }

    set pickerMoment(value: T | undefined) {
        const oldMoment = this._pickerMoment
        value = this.dateTimeAdapter.deserialize(value)
        this._pickerMoment =
            this.getValidDate(value) || this.dateTimeAdapter.now()

        this.firstDateOfMonth = this.dateTimeAdapter.createDate(
            this.dateTimeAdapter.getYear(this._pickerMoment),
            this.dateTimeAdapter.getMonth(this._pickerMoment),
            1
        )

        if (
            !this.isSameMonth(oldMoment, this._pickerMoment) &&
            this.initiated
        ) {
            this.generateCalendar()
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
            this.generateCalendar()
            this.cdRef.markForCheck()
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
            this.generateCalendar()
            this.cdRef.markForCheck()
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
            this.generateCalendar()
            this.cdRef.markForCheck()
        }
    }

    private _weekdays?: Array<{ long: string, short: string, narrow: string }>
    get weekdays() {
        return this._weekdays
    }

    private _days?: CalendarCell[][]
    get days() {
        return this._days
    }

    get activeCell() {
        if (this.pickerMoment) {
            return (
                this.dateTimeAdapter.getDate(this.pickerMoment) +
                this.firstRowOffset -
                1
            )
        }
        return
    }

    get isInSingleMode(): boolean {
        return this.selectMode === 'single'
    }

    get isInRangeMode(): boolean {
        return (
            this.selectMode === 'range' ||
            this.selectMode === 'rangeFrom' ||
            this.selectMode === 'rangeTo'
        )
    }

    private firstDateOfMonth?: T

    private localeSub?: Subscription

    private initiated = false

    /**
     * The date of the month that today falls on.
     */
    todayDate?: number

    /**
     * An array to hold all selectedDates' value
     * the value is the day number in current month
     */
    selectedDates?: Array<number | undefined>

    // the index of cell that contains the first date of the month
    firstRowOffset: number = 0

    /**
     * Callback to invoke when a new date is selected
     */
    @Output()
    readonly selectedChange = new EventEmitter<T | undefined>()

    /**
     * Callback to invoke when any date is selected.
     */
    @Output()
    readonly userSelection = new EventEmitter<void>()

    /** Emits when any date is activated */
    @Output()
    readonly pickerMomentChange = new EventEmitter<T>()

    /** The body of calendar table */
    @ViewChild(CalendarBodyComponent, { static: true })
    private calendarBodyElm?: CalendarBodyComponent

    /** @internal */
    @HostBinding('class.nxt-dt-calendar-view')
    get calendarView(): boolean {
        return true
    }

    constructor(
        private readonly cdRef: ChangeDetectorRef,
        private readonly dateTimeAdapter: DateTimeAdapter<T>,
        @Inject(NXT_DATE_TIME_FORMATS)
        private readonly dateTimeFormats: DateTimeFormats
    ) { }

    ngOnInit() {
        this.generateWeekDays()

        this.localeSub = this.dateTimeAdapter.localeChanges.subscribe(() => {
            this.generateWeekDays()
            this.generateCalendar()
            this.cdRef.markForCheck()
        })
    }

    ngAfterContentInit(): void {
        this.generateCalendar()
        this.initiated = true
    }

    ngOnDestroy(): void {
        this.localeSub?.unsubscribe()
        this.localeSub = undefined
    }

    /**
     * Handle a calendarCell selected
     */
    selectCalendarCell(cell: CalendarCell): void {
        // Cases in which the date would not be selected
        // 1, the calendar cell is NOT enabled (is NOT valid)
        // 2, the selected date is NOT in current picker's month and the hideOtherMonths is enabled
        if (!cell.enabled || (this.hideOtherMonths && cell.out)) {
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
            this.firstDateOfMonth,
            daysDiff
        )

        this.selectedChange.emit(selected)
        this.userSelection.emit()
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
                    this.pickerMoment,
                    -1
                )
                this.pickerMomentChange.emit(moment)
                break

            // add 1 day
            case 'arrowright':
                moment = this.dateTimeAdapter.addCalendarDays(
                    this.pickerMoment,
                    1
                )
                this.pickerMomentChange.emit(moment)
                break

            // minus 1 week
            case 'arrowup':
                moment = this.dateTimeAdapter.addCalendarDays(
                    this.pickerMoment,
                    -7
                )
                this.pickerMomentChange.emit(moment)
                break

            // add 1 week
            case 'arrowdown':
                moment = this.dateTimeAdapter.addCalendarDays(
                    this.pickerMoment,
                    7
                )
                this.pickerMomentChange.emit(moment)
                break

            // move to first day of current month
            case 'home':
                moment = this.dateTimeAdapter.addCalendarDays(
                    this.pickerMoment,
                    1 - this.dateTimeAdapter.getDate(this.pickerMoment)
                )
                this.pickerMomentChange.emit(moment)
                break

            // move to last day of current month
            case 'end':
                moment = this.dateTimeAdapter.addCalendarDays(
                    this.pickerMoment,
                    this.dateTimeAdapter.getNumDaysInMonth(this.pickerMoment) -
                    this.dateTimeAdapter.getDate(this.pickerMoment)
                )
                this.pickerMomentChange.emit(moment)
                break

            // minus 1 month (or 1 year)
            case 'pageup':
                moment = event.altKey
                    ? this.dateTimeAdapter.addCalendarYears(
                        this.pickerMoment,
                        -1
                    )
                    : this.dateTimeAdapter.addCalendarMonths(
                        this.pickerMoment,
                        -1
                    )
                this.pickerMomentChange.emit(moment)
                break

            // add 1 month (or 1 year)
            case 'pagedown':
                moment = event.altKey
                    ? this.dateTimeAdapter.addCalendarYears(
                        this.pickerMoment,
                        1
                    )
                    : this.dateTimeAdapter.addCalendarMonths(
                        this.pickerMoment,
                        1
                    )
                this.pickerMomentChange.emit(moment)
                break

            // select the pickerMoment
            case 'enter':
                if (!this.dateTimeFilter || this.dateTimeFilter(this.pickerMoment, 'date')) {
                    this.selectDate(
                        this.dateTimeAdapter.getDate(this.pickerMoment)
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
     * Generate the calendar weekdays array
     */
    private generateWeekDays(): void {
        const longWeekdays = this.dateTimeAdapter.getDayOfWeekNames('long')
        const shortWeekdays = this.dateTimeAdapter.getDayOfWeekNames('short')
        const narrowWeekdays = this.dateTimeAdapter.getDayOfWeekNames('narrow')
        const firstDayOfWeek = this.firstDayOfWeek

        const weekdays = longWeekdays.map((long, i) => ({ long, short: shortWeekdays[i], narrow: narrowWeekdays[i] }))

        this._weekdays = weekdays
            .slice(firstDayOfWeek)
            .concat(weekdays.slice(0, firstDayOfWeek))

        return
    }

    /**
     * Generate the calendar days array
     */
    private generateCalendar(): void {
        if (!this.pickerMoment) {
            return
        }

        this.todayDate = undefined

        // the first weekday of the month
        const startWeekdayOfMonth = this.dateTimeAdapter.getDay(
            this.firstDateOfMonth
        )
        const firstDayOfWeek = this.firstDayOfWeek

        // the amount of days from the first date of the month
        // if it is < 0, it means the date is in previous month
        let daysDiff =
            0 -
            ((startWeekdayOfMonth + (DAYS_PER_WEEK - firstDayOfWeek)) %
                DAYS_PER_WEEK)

        // the index of cell that contains the first date of the month
        this.firstRowOffset = Math.abs(daysDiff)

        this._days = []
        for (let i = 0; i < WEEKS_PER_VIEW; i++) {
            const week = []
            for (let j = 0; j < DAYS_PER_WEEK; j++) {
                const date = this.dateTimeAdapter.addCalendarDays(
                    this.firstDateOfMonth,
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
                    this.todayDate = daysDiff + 1
                }

                week.push(dateCell)
                daysDiff += 1
            }
            this._days.push(week)
        }

        this.setSelectedDates()
    }

    /**
     * Creates CalendarCell for days.
     */
    private createDateCell(date: T, daysDiff: number): CalendarCell {
        // total days of the month
        const daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(
            this.pickerMoment
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
            (!this.dateTimeFilter || this.dateTimeFilter(date, 'date')) &&
            (!this.min ||
                this.dateTimeAdapter.compare(date, this.min) >= 0) &&
            (!this.max ||
                this.dateTimeAdapter.compare(date, this.max) <= 0)
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

    /**
     * Set the selectedDates value.
     * In single mode, it has only one value which represent the selected date
     * In range mode, it would has two values, one for the fromValue and the other for the toValue
     */
    private setSelectedDates(): void {
        this.selectedDates = []

        if (!this.firstDateOfMonth) {
            return
        }

        if (this.isInSingleMode && this.selected) {
            const dayDiff = this.dateTimeAdapter.differenceInCalendarDays(
                this.selected,
                this.firstDateOfMonth
            ) ?? 0
            this.selectedDates[0] = dayDiff + 1
            return
        }

        if (this.isInRangeMode && this.selecteds) {
            this.selectedDates = this.selecteds.map(selected => {
                if (this.dateTimeAdapter.isValid(selected)) {
                    const dayDiff = this.dateTimeAdapter.differenceInCalendarDays(
                        selected,
                        this.firstDateOfMonth
                    ) ?? 0
                    return dayDiff + 1
                }
                return
            })
        }
    }

    private focusActiveCell() {
        this.calendarBodyElm?.focusActiveCell()
    }
}
