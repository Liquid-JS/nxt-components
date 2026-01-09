import { AnimationEvent } from '@angular/animations'
import { CdkTrapFocus } from '@angular/cdk/a11y'
import { AfterContentInit, AfterViewInit, Component, computed, ElementRef, signal, viewChild, inject } from '@angular/core'
import { Subject } from 'rxjs'
import { DateTimeAdapter } from '../../class/date-time-adapter.class'
import { DateTimeDirective } from '../../class/date-time.class'
import { CalendarComponent } from '../calendar/calendar.component'
import { DateTimeIntl } from '../date-time-picker-intl.service'
import { TimerComponent } from '../timer/timer.component'
import { dateTimePickerAnimations } from './date-time-picker-container.animations'

/** @internal */
@Component({
    selector: 'nxt-date-time-container',
    templateUrl: './date-time-picker-container.component.html',
    styleUrls: ['./date-time-picker-container.component.scss'],
    preserveWhitespaces: false,
    animations: [
        dateTimePickerAnimations.transformPicker,
        dateTimePickerAnimations.fadeInPicker
    ],
    imports: [
        CdkTrapFocus,
        CalendarComponent,
        TimerComponent
    ],
    host: {
        '[class.nxt-dt-container]': 'true',
        '[class.nxt-dt-popup-container]': "pickerMode() === 'popup'",
        '[class.nxt-dt-dialog-container]': "pickerMode() === 'dialog'",
        '[class.nxt-dt-inline-container]': "pickerMode() === 'inline'",
        '[class.nxt-dt-container-disabled]': 'disabled()',
        '[attr.id]': 'picker()?.id',
        '[@transformPicker]': "pickerMode() === 'inline' ? '' : 'enter'",
        '(@transformPicker.done)': 'handleContainerAnimationDone($event)'
    }
})
export class DateTimeContainerComponent<T> implements AfterContentInit, AfterViewInit {
    private readonly elmRef = inject<ElementRef<HTMLElement>>(ElementRef)
    private readonly pickerIntl = inject(DateTimeIntl)
    private readonly dateTimeAdapter = inject<DateTimeAdapter<T>>(DateTimeAdapter)

    readonly calendar = viewChild(CalendarComponent)

    readonly timer = viewChild(TimerComponent)

    readonly picker = signal<DateTimeDirective<T> | undefined>(undefined)
    readonly activeSelectedIndex = signal(0) // The current active SelectedIndex in range select mode (0: 'from', 1: 'to')

    /**
     * Stream emits when try to hide picker
     */
    private readonly hidePicker$ = new Subject<void>()

    readonly hidePickerStream = this.hidePicker$.asObservable()

    /**
     * Stream emits when try to confirm the selected value
     */
    private readonly confirmSelected$ = new Subject<Event>()

    readonly confirmSelectedStream = this.confirmSelected$.asObservable()

    private readonly pickerOpened$ = new Subject<void>()

    readonly pickerOpenedStream = this.pickerOpened$.asObservable()

    /**
     * The current picker moment. This determines which time period is shown and which date is
     * highlighted when using keyboard navigation.
     */
    private readonly _clamPickerMoment = signal<T | undefined>(undefined)

    get pickerMoment() {
        return this._clamPickerMoment()
    }

    set pickerMoment(value: T | undefined) {
        if (value) {
            this._clamPickerMoment.set(this.dateTimeAdapter.clampDate(
                value,
                this.min(),
                this.max()
            ))
        }
    }

    readonly pickerType = computed(() => this.picker()?.pickerType())
    readonly pickerMode = computed(() => this.picker()?.pickerMode())
    readonly min = computed(() => this.picker()?.min())
    readonly max = computed(() => this.picker()?.max())
    readonly selected = computed(() => this.picker()?.selected())
    readonly selecteds = computed(() => this.picker()?.selecteds())
    readonly selectMode = computed(() => this.picker()?.selectMode())
    readonly isInRangeMode = computed(() => this.picker()?.isInRangeMode())
    readonly firstDayOfWeek = computed(() => this.picker()?.firstDayOfWeek())
    readonly dateTimeFilter = computed(() => this.picker()?.dateTimeFilter())
    readonly startView = computed(() => this.picker()?.startView())
    readonly hideOtherMonths = computed(() => this.picker()?.hideOtherMonths())
    readonly showSecondsTimer = computed(() => this.picker()?.showSecondsTimer())
    readonly hour12Timer = computed(() => this.picker()?.hour12Timer())
    readonly stepHour = computed(() => this.picker()?.stepHour())
    readonly stepMinute = computed(() => this.picker()?.stepMinute())
    readonly stepSecond = computed(() => this.picker()?.stepSecond())
    readonly disabled = computed(() => this.picker()?.disabled())

    private readonly formatString = computed(() => this.picker()?.formatString())
    private readonly startAt = computed(() => this.picker()?.startAt())
    private readonly dateTimeChecker = computed(() => this.picker()?.dateTimeChecker())

    readonly cancelLabel = this.pickerIntl.cancelBtnLabel.asReadonly()

    readonly setLabel = this.pickerIntl.setBtnLabel.asReadonly()

    /**
     * The range 'from' label
     */
    readonly fromLabel = this.pickerIntl.rangeFromLabel.asReadonly()

    /**
     * The range 'to' label
     */
    readonly toLabel = this.pickerIntl.rangeToLabel.asReadonly()

    /**
     * The range 'from' formatted value
     */
    readonly fromFormattedValue = computed(() => {
        const value = this.selecteds()?.[0]
        return value
            ? this.dateTimeAdapter.format(value, this.formatString())
            : ''
    })

    /**
     * The range 'to' formatted value
     */
    readonly toFormattedValue = computed(() => {
        const value = this.selecteds()?.[1]
        return value
            ? this.dateTimeAdapter.format(value, this.formatString())
            : ''
    })

    /**
     * Cases in which the control buttons show in the picker
     * 1) picker mode is 'dialog'
     * 2) picker type is NOT 'calendar' and the picker mode is NOT 'inline'
     */
    readonly showControlButtons = computed(() => {
        const pickerMode = this.pickerMode()
        const pickerType = this.pickerType()
        return (
            pickerMode === 'dialog' ||
            (pickerType !== 'calendar' &&
                pickerMode !== 'inline')
        )
    })

    get containerElm(): HTMLElement {
        return this.elmRef.nativeElement
    }

    ngAfterContentInit(): void {
        this.initPicker()
    }

    ngAfterViewInit(): void {
        this.focusPicker()
    }

    handleContainerAnimationDone(event: AnimationEvent): void {
        const toState = event.toState
        if (toState === 'enter') {
            this.pickerOpened$.next()
        }
    }

    dateSelected(date?: T): void {
        let result

        const picker = this.picker()

        if (picker?.isInSingleMode()) {
            result = this.dateSelectedInSingleMode(date)
            if (result) {
                this.pickerMoment = result
                picker.select(result)
            } else {
                // we close the picker when result is undefined and pickerType is calendar.
                if (this.pickerType() === 'calendar') {
                    this.hidePicker$.next()
                }
            }
            return
        }

        if (picker?.isInRangeMode()) {
            result = this.dateSelectedInRangeMode(date)
            if (result) {
                this.pickerMoment = result[this.activeSelectedIndex()]
                picker.select(result)
            }
        }
    }

    timeSelected(time?: T): void {
        this.pickerMoment = this.dateTimeAdapter.clone(time)

        const picker = this.picker()

        if (!picker?.dateTimeChecker()?.(this.pickerMoment)) {
            return
        }

        if (picker.isInSingleMode()) {
            picker.select(this.pickerMoment)
            return
        }

        if (this.isInRangeMode()) {
            const selecteds = [...this.selecteds() || []]

            // check if the 'from' is after 'to' or 'to'is before 'from'
            // In this case, we set both the 'from' and 'to' the same value
            if (
                (this.activeSelectedIndex() === 0 &&
                    selecteds[1] &&
                    this.dateTimeAdapter.compare(
                        this.pickerMoment,
                        selecteds[1]
                    ) === 1) ||
                (this.activeSelectedIndex() === 1 &&
                    selecteds[0] &&
                    this.dateTimeAdapter.compare(
                        this.pickerMoment,
                        selecteds[0]
                    ) === -1)
            ) {
                selecteds[0] = this.pickerMoment
                selecteds[1] = this.pickerMoment
            } else {
                selecteds[this.activeSelectedIndex()] = this.pickerMoment
            }

            picker.select(selecteds)
        }
    }

    /**
     * Handle click on cancel button
     */
    onCancelClicked(event: Event): void {
        this.hidePicker$.next()
        event.preventDefault()
        return
    }

    /**
     * Handle click on set button
     */
    onSetClicked(event: Event): void {
        if (!this.dateTimeChecker()?.(this.pickerMoment)) {
            this.hidePicker$.next()
            event.preventDefault()
            return
        }

        this.confirmSelected$.next(event)
        event.preventDefault()
        return
    }

    /**
     * Handle click on inform radio group
     */
    handleClickOnInfoGroup(event: any, index: number): void {
        this.setActiveSelectedIndex(index)
        event.preventDefault()
        event.stopPropagation()
    }

    /**
     * Handle click on inform radio group
     */
    handleKeydownOnInfoGroup(
        event: any,
        next: any,
        index: number
    ): void {
        switch (event.keyCode) {
            case 'ArrowDown':
            case 'ArrowRight':
            case 'ArrowUp':
            case 'ArrowLeft':
                next.focus()
                this.setActiveSelectedIndex(index === 0 ? 1 : 0)
                event.preventDefault()
                event.stopPropagation()
                break

            case 'Space':
                this.setActiveSelectedIndex(index)
                event.preventDefault()
                event.stopPropagation()
                break

            default:
                return
        }
    }

    /**
     * Set the value of activeSelectedIndex
     */
    private setActiveSelectedIndex(index: number): void {
        if (
            this.selectMode() === 'range' &&
            this.activeSelectedIndex() !== index
        ) {
            this.activeSelectedIndex.set(index)

            const selected = this.selecteds()?.[this.activeSelectedIndex()]
            if (this.selecteds() && selected) {
                this.pickerMoment = this.dateTimeAdapter.clone(selected)
            }
        }
        return
    }

    private initPicker(): void {
        this.pickerMoment = this.startAt() || this.dateTimeAdapter.now()
        this.activeSelectedIndex.set(this.selectMode() === 'rangeTo' ? 1 : 0)
    }

    /**
     * Select calendar date in single mode,
     * it returns undefined when date is not selected.
     */
    private dateSelectedInSingleMode(date?: T): T | undefined {
        if (this.dateTimeAdapter.isSameDay(date, this.selected())) {
            return undefined
        }

        return this.updateAndCheckCalendarDate(date)
    }

    /**
     * Select dates in range Mode
     */
    private dateSelectedInRangeMode(date?: T): Array<T | undefined> | undefined {
        let from = this.selecteds()?.[0]
        let to = this.selecteds()?.[1]

        const result = this.updateAndCheckCalendarDate(date)

        if (!result) {
            return
        }

        // if the given calendar day is after or equal to 'from',
        // set ths given date as 'to'
        // otherwise, set it as 'from' and set 'to' to undefined
        if (this.selectMode() === 'range') {
            if (
                this.selecteds()?.length &&
                !to &&
                from &&
                (this.dateTimeAdapter.differenceInCalendarDays(result, from) ?? 0) >= 0
            ) {
                to = result
                this.activeSelectedIndex.set(1)
            } else {
                from = result
                to = undefined
                this.activeSelectedIndex.set(0)
            }
        } else if (this.selectMode() === 'rangeFrom') {
            from = result

            // if the from value is after the to value, set the to value as undefined
            if (to && this.dateTimeAdapter.compare(from, to) > 0) {
                to = undefined
            }
        } else if (this.selectMode() === 'rangeTo') {
            to = result

            // if the from value is after the to value, set the from value as undefined
            if (from && this.dateTimeAdapter.compare(from, to) > 0) {
                from = undefined
            }
        }

        return [from, to]
    }

    /**
     * Update the given calendar date's time and check if it is valid
     * Because the calendar date has 00:00:00 as default time, if the picker type is 'both',
     * we need to update the given calendar date's time before selecting it.
     * if it is valid, return the updated dateTime
     * if it is not valid, return undefined
     */
    private updateAndCheckCalendarDate(date?: T): T | undefined {
        let result

        // if the picker is 'both', update the calendar date's time value
        if (this.pickerType() === 'both') {
            result = this.dateTimeAdapter.createDate(
                this.dateTimeAdapter.getYear(date),
                this.dateTimeAdapter.getMonth(date),
                this.dateTimeAdapter.getDate(date),
                this.dateTimeAdapter.getHours(this.pickerMoment),
                this.dateTimeAdapter.getMinutes(this.pickerMoment),
                this.dateTimeAdapter.getSeconds(this.pickerMoment)
            )
            result = this.dateTimeAdapter.clampDate(
                result,
                this.min(),
                this.max()
            )
        } else {
            result = this.dateTimeAdapter.clone(date)
        }

        // check the updated dateTime
        return this.dateTimeChecker()?.(result) ? result : undefined
    }

    /**
     * Focus to the picker
     */
    private focusPicker(): void {
        if (this.pickerMode() === 'inline') {
            return
        }

        const calendar = this.calendar()
        const timer = this.timer()
        if (calendar) {
            calendar.focusActiveCell()
        } else if (timer) {
            timer.focus()
        }
    }
}
