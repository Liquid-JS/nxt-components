import { AfterContentInit, AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, Inject, Input, NgZone, OnDestroy, OnInit, Output } from '@angular/core'
import { Subscription } from 'rxjs'
import { take } from 'rxjs/operators'
import { DateTimeAdapter } from '../../class/date-time-adapter.class'
import { DateTimeFormats, NXT_DATE_TIME_FORMATS } from '../../class/date-time-format.class'
import { DateFilter, SelectMode } from '../../class/date-time.class'
import { DateTimeIntl } from '../date-time-picker-intl.service'

@Component({
    selector: 'nxt-date-time-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent<T> implements OnInit, AfterContentInit, AfterViewChecked, OnDestroy {
    /**
     * Date filter for the month and year view
     * */
    @Input()
    dateFilter?: DateFilter<T>

    /**
     * Set the first day of week
     */
    @Input()
    firstDayOfWeek = 0

    /** The minimum selectable date. */
    private _minDate?: T
    @Input()
    get min() {
        return this._minDate
    }

    set min(value: T | undefined) {
        value = this.dateTimeAdapter.deserialize(value)
        value = this.getValidDate(value)

        this._minDate = value
            ? this.dateTimeAdapter.createDate(
                this.dateTimeAdapter.getYear(value),
                this.dateTimeAdapter.getMonth(value),
                this.dateTimeAdapter.getDate(value)
            )
            : undefined
    }

    /** The maximum selectable date. */
    private _maxDate?: T
    @Input()
    get max() {
        return this._maxDate
    }

    set max(value: T | undefined) {
        value = this.dateTimeAdapter.deserialize(value)
        value = this.getValidDate(value)

        this._maxDate = value
            ? this.dateTimeAdapter.createDate(
                this.dateTimeAdapter.getYear(value),
                this.dateTimeAdapter.getMonth(value),
                this.dateTimeAdapter.getDate(value)
            )
            : undefined
    }

    /** The current picker moment */
    private _pickerMoment?: T
    @Input()
    get pickerMoment() {
        return this._pickerMoment
    }

    set pickerMoment(value: T | undefined) {
        value = this.dateTimeAdapter.deserialize(value)
        this._pickerMoment =
            this.getValidDate(value) || this.dateTimeAdapter.now()
    }

    @Input()
    selectMode?: SelectMode

    /** The currently selected moment. */
    private _selected?: T
    @Input()
    get selected() {
        return this._selected
    }

    set selected(value: T | undefined) {
        value = this.dateTimeAdapter.deserialize(value)
        this._selected = this.getValidDate(value)
    }

    private _selecteds = new Array<T | undefined>()
    @Input()
    get selecteds() {
        return this._selecteds
    }

    set selecteds(values: Array<T | undefined>) {
        this._selecteds = values.map(v => {
            v = this.dateTimeAdapter.deserialize(v)
            return this.getValidDate(v)
        })
    }

    /**
     * The view that the calendar should start in.
     */
    @Input()
    startView: 'month' | 'year' | 'multi-years' = 'month'

    /**
     * Whether to hide dates in other months at the start or end of the current month.
     * */
    @Input()
    hideOtherMonths: boolean = false

    /** Emits when the currently picker moment changes. */
    @Output()
    readonly pickerMomentChange = new EventEmitter<T>()

    /** Emits when the currently selected date changes. */
    @Output()
    readonly selectedChange = new EventEmitter<T | undefined>()

    /** Emits when any date is selected. */
    @Output()
    readonly userSelection = new EventEmitter<void>()

    /**
     * Emits the selected year. This doesn't imply a change on the selected date
     * */
    @Output()
    readonly yearSelected = new EventEmitter<T>()

    /**
     * Emits the selected month. This doesn't imply a change on the selected date
     * */
    @Output()
    readonly monthSelected = new EventEmitter<T>()

    get periodButtonText(): string {
        return this.isMonthView
            ? this.dateTimeAdapter.format(
                this.pickerMoment,
                this.dateTimeFormats.monthYearLabel
            )
            : this.dateTimeAdapter.getYearName(this.pickerMoment)
    }

    get periodButtonLabel(): string {
        return this.isMonthView
            ? this.pickerIntl.switchToMultiYearViewLabel
            : this.pickerIntl.switchToMonthViewLabel
    }

    get prevButtonLabel() {
        if (this._currentView === 'month') {
            return this.pickerIntl.prevMonthLabel
        } else if (this._currentView === 'year') {
            return this.pickerIntl.prevYearLabel
        }
        return
    }

    get nextButtonLabel() {
        if (this._currentView === 'month') {
            return this.pickerIntl.nextMonthLabel
        } else if (this._currentView === 'year') {
            return this.pickerIntl.nextYearLabel
        }
        return
    }

    private _currentView?: 'month' | 'year' | 'multi-years'
    get currentView() {
        return this._currentView
    }

    set currentView(view: 'month' | 'year' | 'multi-years' | undefined) {
        this._currentView = view
        this.moveFocusOnNextTick = true
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

    get showControlArrows(): boolean {
        return this._currentView !== 'multi-years'
    }

    get isMonthView() {
        return this._currentView === 'month'
    }

    /**
     * Date filter for the month and year view
     */
    dateFilterForViews = (date?: T) => (
        !!date &&
        (!this.dateFilter || this.dateFilter(date, 'date')) &&
        (!this.min ||
            this.dateTimeAdapter.compare(date, this.min) >= 0) &&
        (!this.max ||
            this.dateTimeAdapter.compare(date, this.max) <= 0)
    )

    /**
     * Bind class 'nxt-dt-calendar' to host
     * */
    @HostBinding('class.nxt-dt-calendar')
    get calendarClass(): boolean {
        return true
    }

    private intlChangesSub?: Subscription

    /**
     * Used for scheduling that focus should be moved to the active cell on the next tick.
     * We need to schedule it, rather than do it immediately, because we have to wait
     * for Angular to re-evaluate the view children.
     */
    private moveFocusOnNextTick = false

    constructor(
        private readonly elmRef: ElementRef<HTMLElement>,
        private readonly pickerIntl: DateTimeIntl,
        private readonly ngZone: NgZone,
        private readonly cdRef: ChangeDetectorRef,
        private readonly dateTimeAdapter: DateTimeAdapter<T>,
        @Inject(NXT_DATE_TIME_FORMATS)
        private readonly dateTimeFormats: DateTimeFormats
    ) {
        this.intlChangesSub = this.pickerIntl.changes.subscribe(() => {
            this.cdRef.markForCheck()
        })
    }

    ngOnInit() { }

    ngAfterContentInit(): void {
        this._currentView = this.startView
    }

    ngAfterViewChecked() {
        if (this.moveFocusOnNextTick) {
            this.moveFocusOnNextTick = false
            this.focusActiveCell()
        }
    }

    ngOnDestroy(): void {
        this.intlChangesSub?.unsubscribe()
        this.intlChangesSub = undefined
    }

    /**
     * Toggle between month view and year view
     */
    toggleViews(): void {
        this.currentView =
            this._currentView == 'month' ? 'multi-years' : 'month'
    }

    /**
     * Handles user clicks on the previous button.
     * */
    previousClicked(): void {
        this.pickerMoment = this.isMonthView
            ? this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -1)
            : this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1)

        this.pickerMomentChange.emit(this.pickerMoment)
    }

    /**
     * Handles user clicks on the next button.
     * */
    nextClicked(): void {
        this.pickerMoment = this.isMonthView
            ? this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 1)
            : this.dateTimeAdapter.addCalendarYears(this.pickerMoment, 1)

        this.pickerMomentChange.emit(this.pickerMoment)
    }

    dateSelected(date?: T): void {
        if (!this.dateFilterForViews(date)) {
            return
        }

        this.selectedChange.emit(date)

        /*if ((this.isInSingleMode && !this.dateTimeAdapter.isSameDay(date, this.selected)) ||
            this.isInRangeMode) {
            this.selectedChange.emit(date);
        }*/
    }

    /**
     * Change the pickerMoment value and switch to a specific view
     */
    goToDateInView(
        date: T,
        view: 'month' | 'year' | 'multi-years'
    ): void {
        this.handlePickerMomentChange(date)
        this.currentView = view
        return
    }

    /**
     * Change the pickerMoment value
     */
    handlePickerMomentChange(date: T): void {
        this.pickerMoment = this.dateTimeAdapter.clampDate(
            date,
            this.min,
            this.max
        )
        this.pickerMomentChange.emit(this.pickerMoment)
        return
    }

    userSelected(): void {
        this.userSelection.emit()
    }

    /**
     * Whether the previous period button is enabled.
     */
    prevButtonEnabled(): boolean {
        return (
            !this.min || !this.isSameView(this.pickerMoment, this.min)
        )
    }

    /**
     * Whether the next period button is enabled.
     */
    nextButtonEnabled(): boolean {
        return (
            !this.max || !this.isSameView(this.pickerMoment, this.max)
        )
    }

    /**
     * Focus to the host element
     * */
    focusActiveCell() {
        this.ngZone.runOutsideAngular(() => {
            this.ngZone.onStable
                .asObservable()
                .pipe(take(1))
                .subscribe(() => {
                    this.elmRef.nativeElement
                        ?.querySelector<HTMLElement>('.nxt-dt-calendar-cell-active')
                        ?.focus()
                })
        })
    }

    selectYearInMultiYearView(normalizedYear: T): void {
        this.yearSelected.emit(normalizedYear)
    }

    selectMonthInYearView(normalizedMonth: T): void {
        this.monthSelected.emit(normalizedMonth)
    }

    /**
     * Whether the two dates represent the same view in the current view mode (month or year).
     */
    private isSameView(date1?: T, date2?: T): boolean {
        if (this._currentView === 'month') {
            return !!(
                date1 &&
                date2 &&
                this.dateTimeAdapter.getYear(date1) ===
                this.dateTimeAdapter.getYear(date2) &&
                this.dateTimeAdapter.getMonth(date1) ===
                this.dateTimeAdapter.getMonth(date2)
            )
        } else if (this._currentView === 'year') {
            return !!(
                date1 &&
                date2 &&
                this.dateTimeAdapter.getYear(date1) ===
                this.dateTimeAdapter.getYear(date2)
            )
        } else {
            return false
        }
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
