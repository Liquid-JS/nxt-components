import { Injectable } from '@angular/core'
import { LocalizeFn } from '@angular/localize/init'
import { Subject } from 'rxjs'

declare const $localize: LocalizeFn

@Injectable({
    providedIn: 'root'
})
export class OwlDateTimeIntl {

    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    readonly changes: Subject<void> = new Subject<void>()

    /** A label for the up second button (used by screen readers).  */
    upSecondLabel = $localize`:@@nxt-pick-datetime.up-second:Add a second`

    /** A label for the down second button (used by screen readers).  */
    downSecondLabel = $localize`:@@nxt-pick-datetime.down-second:Minus a second`

    /** A label for the up minute button (used by screen readers).  */
    upMinuteLabel = $localize`:@@nxt-pick-datetime.up-minute:Add a minute`

    /** A label for the down minute button (used by screen readers).  */
    downMinuteLabel = $localize`:@@nxt-pick-datetime.down-minute:Minus a minute`

    /** A label for the up hour button (used by screen readers).  */
    upHourLabel = $localize`:@@nxt-pick-datetime.up-hour:Add a hour`

    /** A label for the down hour button (used by screen readers).  */
    downHourLabel = $localize`:@@nxt-pick-datetime.down-hour:Minus a hour`

    /** A label for the previous month button (used by screen readers). */
    prevMonthLabel = $localize`:@@nxt-pick-datetime.prev-month:Previous month`

    /** A label for the next month button (used by screen readers). */
    nextMonthLabel = $localize`:@@nxt-pick-datetime.next-month:Next month`

    /** A label for the previous year button (used by screen readers). */
    prevYearLabel = $localize`:@@nxt-pick-datetime.prev-year:Previous year`

    /** A label for the next year button (used by screen readers). */
    nextYearLabel = $localize`:@@nxt-pick-datetime.next-year:Next year`

    /** A label for the previous multi-year button (used by screen readers). */
    prevMultiYearLabel = $localize`:@@nxt-pick-datetime.prev-multi-year:Previous 21 years`

    /** A label for the next multi-year button (used by screen readers). */
    nextMultiYearLabel = $localize`:@@nxt-pick-datetime.next-multi-year:Next 21 years`

    /** A label for the 'switch to month view' button (used by screen readers). */
    switchToMonthViewLabel = $localize`:@@nxt-pick-datetime.switch-to-month:Change to month view`

    /** A label for the 'switch to year view' button (used by screen readers). */
    switchToMultiYearViewLabel = $localize`:@@nxt-pick-datetime.switch-to-year-month:Choose month and year`

    /** A label for the cancel button */
    cancelBtnLabel = $localize`:@@nxt-pick-datetime.cancel:Cancel`

    /** A label for the set button */
    setBtnLabel = $localize`:@@nxt-pick-datetime.set:Set`

    /** A label for the range 'from' in picker info */
    rangeFromLabel = $localize`:@@nxt-pick-datetime.from:From`

    /** A label for the range 'to' in picker info */
    rangeToLabel = $localize`:@@nxt-pick-datetime.to:To`

    /** A label for the hour12 button (AM) */
    hour12AMLabel = $localize`:@@nxt-pick-datetime.time-am:AM`

    /** A label for the hour12 button (PM) */
    hour12PMLabel = $localize`:@@nxt-pick-datetime.time-pm:PM`
}
