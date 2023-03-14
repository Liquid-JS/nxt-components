import { AnimationEvent } from '@angular/animations'
import { DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, SPACE, UP_ARROW } from '@angular/cdk/keycodes'
import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core'
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
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    animations: [
        dateTimePickerAnimations.transformPicker,
        dateTimePickerAnimations.fadeInPicker
    ]
})
export class DateTimeContainerComponent<T> implements OnInit, AfterContentInit, AfterViewInit {

    @ViewChild(CalendarComponent)
    calendar?: CalendarComponent<T>

    @ViewChild(TimerComponent)
    timer?: TimerComponent<T>

    picker?: DateTimeDirective<T>
    activeSelectedIndex = 0 // The current active SelectedIndex in range select mode (0: 'from', 1: 'to')

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
    private _clamPickerMoment?: T

    get pickerMoment() {
        return this._clamPickerMoment
    }

    set pickerMoment(value: T | undefined) {
        if (value) {
            this._clamPickerMoment = this.dateTimeAdapter.clampDate(
                value,
                this.picker?.min,
                this.picker?.max
            )
        }
        this.cdRef.markForCheck()
    }

    get pickerType() {
        return this.picker?.pickerType
    }

    get cancelLabel(): string {
        return this.pickerIntl.cancelBtnLabel
    }

    get setLabel(): string {
        return this.pickerIntl.setBtnLabel
    }

    /**
     * The range 'from' label
     */
    get fromLabel(): string {
        return this.pickerIntl.rangeFromLabel
    }

    /**
     * The range 'to' label
     */
    get toLabel(): string {
        return this.pickerIntl.rangeToLabel
    }

    /**
     * The range 'from' formatted value
     */
    get fromFormattedValue(): string {
        const value = this.picker?.selecteds[0]
        return value
            ? this.dateTimeAdapter.format(value, this.picker?.formatString)
            : ''
    }

    /**
     * The range 'to' formatted value
     */
    get toFormattedValue(): string {
        const value = this.picker?.selecteds[1]
        return value
            ? this.dateTimeAdapter.format(value, this.picker?.formatString)
            : ''
    }

    /**
     * Cases in which the control buttons show in the picker
     * 1) picker mode is 'dialog'
     * 2) picker type is NOT 'calendar' and the picker mode is NOT 'inline'
     */
    get showControlButtons(): boolean {
        return (
            this.picker?.pickerMode === 'dialog' ||
            (this.picker?.pickerType !== 'calendar' &&
                this.picker?.pickerMode !== 'inline')
        )
    }

    get containerElm(): HTMLElement {
        return this.elmRef.nativeElement
    }

    /** @internal */
    @HostBinding('class.nxt-dt-container')
    get containerClass(): boolean {
        return true
    }

    /** @internal */
    @HostBinding('class.nxt-dt-popup-container')
    get popupContainerClass(): boolean {
        return this.picker?.pickerMode === 'popup'
    }

    /** @internal */
    @HostBinding('class.nxt-dt-dialog-container')
    get dialogContainerClass(): boolean {
        return this.picker?.pickerMode === 'dialog'
    }

    /** @internal */
    @HostBinding('class.nxt-dt-inline-container')
    get inlineContainerClass(): boolean {
        return this.picker?.pickerMode === 'inline'
    }

    /** @internal */
    @HostBinding('class.nxt-dt-container-disabled')
    get containerDisabledClass(): boolean {
        return !!this.picker?.disabled
    }

    /** @internal */
    @HostBinding('attr.id')
    get containerId(): string | undefined {
        return this.picker?.id
    }

    /** @internal */
    @HostBinding('@transformPicker')
    get containerAnimation(): any {
        return this.picker?.pickerMode === 'inline' ? '' : 'enter'
    }

    constructor(
        private readonly cdRef: ChangeDetectorRef,
        private readonly elmRef: ElementRef<HTMLElement>,
        private readonly pickerIntl: DateTimeIntl,
        private readonly dateTimeAdapter: DateTimeAdapter<T>
    ) { }

    ngOnInit() { }

    ngAfterContentInit(): void {
        this.initPicker()
    }

    ngAfterViewInit(): void {
        this.focusPicker()
    }

    @HostListener('@transformPicker.done', ['$event'])
    handleContainerAnimationDone(event: AnimationEvent): void {
        const toState = event.toState
        if (toState === 'enter') {
            this.pickerOpened$.next()
        }
    }

    dateSelected(date?: T): void {
        let result

        if (this.picker?.isInSingleMode) {
            result = this.dateSelectedInSingleMode(date)
            if (result) {
                this.pickerMoment = result
                this.picker.select(result)
            } else {
                // we close the picker when result is undefined and pickerType is calendar.
                if (this.pickerType === 'calendar') {
                    this.hidePicker$.next()
                }
            }
            return
        }

        if (this.picker?.isInRangeMode) {
            result = this.dateSelectedInRangeMode(date)
            if (result) {
                this.pickerMoment = result[this.activeSelectedIndex]
                this.picker.select(result)
            }
        }
    }

    timeSelected(time?: T): void {
        this.pickerMoment = this.dateTimeAdapter.clone(time)

        if (!this.picker?.dateTimeChecker(this.pickerMoment)) {
            return
        }

        if (this.picker.isInSingleMode) {
            this.picker.select(this.pickerMoment)
            return
        }

        if (this.picker.isInRangeMode) {
            const selecteds = [...this.picker?.selecteds || []]

            // check if the 'from' is after 'to' or 'to'is before 'from'
            // In this case, we set both the 'from' and 'to' the same value
            if (
                (this.activeSelectedIndex === 0 &&
                    selecteds[1] &&
                    this.dateTimeAdapter.compare(
                        this.pickerMoment,
                        selecteds[1]
                    ) === 1) ||
                (this.activeSelectedIndex === 1 &&
                    selecteds[0] &&
                    this.dateTimeAdapter.compare(
                        this.pickerMoment,
                        selecteds[0]
                    ) === -1)
            ) {
                selecteds[0] = this.pickerMoment
                selecteds[1] = this.pickerMoment
            } else {
                selecteds[this.activeSelectedIndex] = this.pickerMoment
            }

            this.picker.select(selecteds)
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
        if (!this.picker?.dateTimeChecker?.(this.pickerMoment)) {
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
            case DOWN_ARROW:
            case RIGHT_ARROW:
            case UP_ARROW:
            case LEFT_ARROW:
                next.focus()
                this.setActiveSelectedIndex(index === 0 ? 1 : 0)
                event.preventDefault()
                event.stopPropagation()
                break

            case SPACE:
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
            this.picker?.selectMode === 'range' &&
            this.activeSelectedIndex !== index
        ) {
            this.activeSelectedIndex = index

            const selected = this.picker?.selecteds[this.activeSelectedIndex]
            if (this.picker.selecteds && selected) {
                this.pickerMoment = this.dateTimeAdapter.clone(selected)
            }
        }
        return
    }

    private initPicker(): void {
        this.pickerMoment = this.picker?.startAt || this.dateTimeAdapter.now()
        this.activeSelectedIndex = this.picker?.selectMode === 'rangeTo' ? 1 : 0
    }

    /**
     * Select calendar date in single mode,
     * it returns undefined when date is not selected.
     */
    private dateSelectedInSingleMode(date?: T): T | undefined {
        if (this.dateTimeAdapter.isSameDay(date, this.picker?.selected)) {
            return undefined
        }

        return this.updateAndCheckCalendarDate(date)
    }

    /**
     * Select dates in range Mode
     */
    private dateSelectedInRangeMode(date?: T): Array<T | undefined> | undefined {
        let from = this.picker?.selecteds[0]
        let to = this.picker?.selecteds[1]

        const result = this.updateAndCheckCalendarDate(date)

        if (!result) {
            return
        }

        // if the given calendar day is after or equal to 'from',
        // set ths given date as 'to'
        // otherwise, set it as 'from' and set 'to' to undefined
        if (this.picker?.selectMode === 'range') {
            if (
                this.picker.selecteds &&
                this.picker.selecteds.length &&
                !to &&
                from &&
                (this.dateTimeAdapter.differenceInCalendarDays(result, from) ?? 0) >= 0
            ) {
                to = result
                this.activeSelectedIndex = 1
            } else {
                from = result
                to = undefined
                this.activeSelectedIndex = 0
            }
        } else if (this.picker?.selectMode === 'rangeFrom') {
            from = result

            // if the from value is after the to value, set the to value as undefined
            if (to && this.dateTimeAdapter.compare(from, to) > 0) {
                to = undefined
            }
        } else if (this.picker?.selectMode === 'rangeTo') {
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
        if (this.picker?.pickerType === 'both') {
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
                this.picker.min,
                this.picker.max
            )
        } else {
            result = this.dateTimeAdapter.clone(date)
        }

        // check the updated dateTime
        return this.picker?.dateTimeChecker(result) ? result : undefined
    }

    /**
     * Focus to the picker
     */
    private focusPicker(): void {
        if (this.picker?.pickerMode === 'inline') {
            return
        }

        if (this.calendar) {
            this.calendar.focusActiveCell()
        } else if (this.timer) {
            this.timer.focus()
        }
    }
}
