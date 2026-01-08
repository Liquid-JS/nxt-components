import { ChangeDetectionStrategy, Component, ElementRef, Inject, NgZone, afterRenderEffect, computed, input, linkedSignal, output } from '@angular/core'
import { take } from 'rxjs/operators'
import { CdkMonitorFocus } from '@angular/cdk/a11y'
import { DateTimeAdapter } from '../../class/date-time-adapter.class'
import { DateTimeFormats, NXT_DATE_TIME_FORMATS } from '../../class/date-time-format.class'
import { DateFilter, SelectMode } from '../../class/date-time.class'
import { DateTimeIntl } from '../date-time-picker-intl.service'
import { MonthViewComponent } from '../calendar-month-view/calendar-month-view.component'
import { YearViewComponent } from '../calendar-year-view/calendar-year-view.component'
import { MultiYearViewComponent } from '../calendar-multi-year-view/calendar-multi-year-view.component'

@Component({
    selector: 'nxt-date-time-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CdkMonitorFocus,
        MonthViewComponent,
        YearViewComponent,
        MultiYearViewComponent
    ],
    host: {
        '[class.nxt-dt-calendar]': 'true'
    }
})
export class CalendarComponent<T> {
    /**
     * Date filter for the month and year view
     */
    readonly dateTimeFilter = input<DateFilter<T>>()

    /**
     * Set the first day of week
     */
    readonly firstDayOfWeek = input(0)

    /** The minimum selectable date */
    readonly min = input<T | undefined, T | undefined>(undefined, {
        transform: (value) => {
            value = this.dateTimeAdapter.deserialize(value)
            value = this.getValidDate(value)

            return value
                ? this.dateTimeAdapter.createDate(
                    this.dateTimeAdapter.getYear(value),
                    this.dateTimeAdapter.getMonth(value),
                    this.dateTimeAdapter.getDate(value)
                )
                : undefined
        }
    })

    /** The maximum selectable date */
    readonly max = input<T | undefined, T | undefined>(undefined, {
        transform: (value) => {
            value = this.dateTimeAdapter.deserialize(value)
            value = this.getValidDate(value)

            return value
                ? this.dateTimeAdapter.createDate(
                    this.dateTimeAdapter.getYear(value),
                    this.dateTimeAdapter.getMonth(value),
                    this.dateTimeAdapter.getDate(value)
                )
                : undefined
        }
    })

    /** The current picker moment */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    readonly _pickerMomentInput = input<T | undefined>(undefined, { alias: 'pickerMoment' })

    /** Settable signal for pickerMoment */
    private readonly _pickerMoment = linkedSignal({
        source: () => this._pickerMomentInput(),
        computation: v => v
    })
    readonly pickerMoment = computed(() => {
        const value = this.dateTimeAdapter.deserialize(this._pickerMoment())
        return this.getValidDate(value) || this.dateTimeAdapter.now()
    })

    readonly selectMode = input<SelectMode>()

    /** The currently selected moment */
    readonly selected = input<T | undefined, T | undefined>(undefined, {
        transform: (value) => {
            value = this.dateTimeAdapter.deserialize(value)
            return this.getValidDate(value)
        }
    })

    readonly selecteds = input<Array<T | undefined>, Array<T | undefined>>([], {
        transform: (values) => values.map(v => {
            v = this.dateTimeAdapter.deserialize(v)
            return this.getValidDate(v)
        })
    })

    /**
     * The view that the calendar should start in
     */
    readonly startView = input<'month' | 'year' | 'multi-years'>('month')

    /**
     * Whether to hide dates in other months at the start or end of the current month
     */
    readonly hideOtherMonths = input<boolean>(false)

    /** Emits when the currently picker moment changes */
    readonly pickerMomentChange = output<T>()

    /** Emits when the currently selected date changes */
    readonly selectedChange = output<T | undefined>()

    /** Emits when any date is selected */
    readonly userSelection = output<void>()

    /**
     * Emits the selected year
     *
     * This doesn't imply a change on the selected date.
     */
    readonly yearSelected = output<T>()

    /**
     * Emits the selected month
     *
     * This doesn't imply a change on the selected date.
     */
    readonly monthSelected = output<T>()

    readonly periodButtonText = computed(() => this.isMonthView()
        ? this.dateTimeAdapter.format(
            this.pickerMoment(),
            this.dateTimeFormats.monthYearLabel
        )
        : this.dateTimeAdapter.getYearName(this.pickerMoment()))

    readonly periodButtonLabel = computed(() => this.isMonthView()
        ? this.pickerIntl.switchToMultiYearViewLabel()
        : this.pickerIntl.switchToMonthViewLabel())

    readonly prevButtonLabel = computed(() => {
        const currentView = this.currentView()
        if (currentView === 'month') {
            return this.pickerIntl.prevMonthLabel()
        } else if (currentView === 'year') {
            return this.pickerIntl.prevYearLabel()
        }
        return
    })

    readonly nextButtonLabel = computed(() => {
        const currentView = this.currentView()
        if (currentView === 'month') {
            return this.pickerIntl.nextMonthLabel()
        } else if (currentView === 'year') {
            return this.pickerIntl.nextYearLabel()
        }
        return
    })

    readonly currentView = linkedSignal({
        source: () => this.startView(),
        computation: v => v
    })

    readonly isInSingleMode = computed(() => this.selectMode() === 'single')

    readonly isInRangeMode = computed(() => {
        const selectMode = this.selectMode()
        return (
            selectMode === 'range' ||
            selectMode === 'rangeFrom' ||
            selectMode === 'rangeTo'
        )
    })

    readonly showControlArrows = computed(() => this.currentView() !== 'multi-years')

    readonly isMonthView = computed(() => this.currentView() === 'month')

    /**
     * Date filter for the month and year view
     */
    dateTimeFilterForViews = (date?: T) => {
        const dateTimeFilter = this.dateTimeFilter()
        return (
            !!date &&
            (!dateTimeFilter || dateTimeFilter(date, 'date')) &&
            (!this.min() ||
                this.dateTimeAdapter.compare(date, this.min()) >= 0) &&
            (!this.max() ||
                this.dateTimeAdapter.compare(date, this.max()) <= 0)
        )
    }

    constructor(
        private readonly elmRef: ElementRef<HTMLElement>,
        private readonly pickerIntl: DateTimeIntl,
        private readonly ngZone: NgZone,
        private readonly dateTimeAdapter: DateTimeAdapter<T>,
        @Inject(NXT_DATE_TIME_FORMATS)
        private readonly dateTimeFormats: DateTimeFormats
    ) {
        afterRenderEffect(() => {
            this.currentView()
            this.ngZone.runOutsideAngular(() => {
                this.elmRef.nativeElement
                    ?.querySelector<HTMLElement>('.nxt-dt-calendar-cell-active')
                    ?.focus()
            })
        })
    }

    /**
     * Toggle between month view and year view
     */
    toggleViews(): void {
        this.currentView.set(
            this.currentView() == 'month' ? 'multi-years' : 'month')
    }

    /**
     * Handles user clicks on the previous button.
     */
    previousClicked(): void {
        const newVal = this.isMonthView()
            ? this.dateTimeAdapter.addCalendarMonths(this.pickerMoment(), -1)
            : this.dateTimeAdapter.addCalendarYears(this.pickerMoment(), -1)
        this._pickerMoment.set(newVal)

        this.pickerMomentChange.emit(newVal)
    }

    /**
     * Handles user clicks on the next button.
     */
    nextClicked(): void {
        const newVal = this.isMonthView()
            ? this.dateTimeAdapter.addCalendarMonths(this.pickerMoment(), 1)
            : this.dateTimeAdapter.addCalendarYears(this.pickerMoment(), 1)
        this._pickerMoment.set(newVal)

        this.pickerMomentChange.emit(newVal)
    }

    dateSelected(date?: T): void {
        if (!this.dateTimeFilterForViews(date)) {
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
        this.currentView.set(view)
        return
    }

    /**
     * Change the pickerMoment value
     */
    handlePickerMomentChange(date: T): void {
        const newVal = this.dateTimeAdapter.clampDate(
            date,
            this.min(),
            this.max()
        )
        this._pickerMoment.set(newVal)
        this.pickerMomentChange.emit(newVal)
    }

    userSelected(): void {
        this.userSelection.emit(undefined)
    }

    /**
     * Whether the previous period button is enabled.
     */
    prevButtonEnabled(): boolean {
        return (
            !this.min() || !this.isSameView(this.pickerMoment(), this.min())
        )
    }

    /**
     * Whether the next period button is enabled.
     */
    nextButtonEnabled(): boolean {
        return (
            !this.max || !this.isSameView(this.pickerMoment(), this.max())
        )
    }

    /**
     * Focus to the host element
     */
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
        if (this.currentView() === 'month') {
            return !!(
                date1 &&
                date2 &&
                this.dateTimeAdapter.getYear(date1) ===
                this.dateTimeAdapter.getYear(date2) &&
                this.dateTimeAdapter.getMonth(date1) ===
                this.dateTimeAdapter.getMonth(date2)
            )
        } else if (this.currentView() === 'year') {
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
