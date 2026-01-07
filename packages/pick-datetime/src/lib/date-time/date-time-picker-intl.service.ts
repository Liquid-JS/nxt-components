import { Injectable, signal } from '@angular/core'
import { LocalizeFn } from '@angular/localize/init'

/** @internal */
declare const $localize: LocalizeFn

@Injectable({
    providedIn: 'root'
})
export class DateTimeIntl {

    /** A label for the up second button (used by screen readers).  */
    readonly upSecondLabel = signal($localize`:@@nxt-pick-datetime.up-second:Add a second`)

    /** A label for the down second button (used by screen readers).  */
    readonly downSecondLabel = signal($localize`:@@nxt-pick-datetime.down-second:Minus a second`)

    /** A label for the up minute button (used by screen readers).  */
    readonly upMinuteLabel = signal($localize`:@@nxt-pick-datetime.up-minute:Add a minute`)

    /** A label for the down minute button (used by screen readers).  */
    readonly downMinuteLabel = signal($localize`:@@nxt-pick-datetime.down-minute:Minus a minute`)

    /** A label for the up hour button (used by screen readers).  */
    readonly upHourLabel = signal($localize`:@@nxt-pick-datetime.up-hour:Add a hour`)

    /** A label for the down hour button (used by screen readers).  */
    readonly downHourLabel = signal($localize`:@@nxt-pick-datetime.down-hour:Minus a hour`)

    /** A label for the previous month button (used by screen readers) */
    readonly prevMonthLabel = signal($localize`:@@nxt-pick-datetime.prev-month:Previous month`)

    /** A label for the next month button (used by screen readers) */
    readonly nextMonthLabel = signal($localize`:@@nxt-pick-datetime.next-month:Next month`)

    /** A label for the previous year button (used by screen readers) */
    readonly prevYearLabel = signal($localize`:@@nxt-pick-datetime.prev-year:Previous year`)

    /** A label for the next year button (used by screen readers) */
    readonly nextYearLabel = signal($localize`:@@nxt-pick-datetime.next-year:Next year`)

    /** A label for the previous multi-year button (used by screen readers) */
    readonly prevMultiYearLabel = signal($localize`:@@nxt-pick-datetime.prev-multi-year:Previous 21 years`)

    /** A label for the next multi-year button (used by screen readers) */
    readonly nextMultiYearLabel = signal($localize`:@@nxt-pick-datetime.next-multi-year:Next 21 years`)

    /** A label for the 'switch to month view' button (used by screen readers) */
    readonly switchToMonthViewLabel = signal($localize`:@@nxt-pick-datetime.switch-to-month:Change to month view`)

    /** A label for the 'switch to year view' button (used by screen readers) */
    readonly switchToMultiYearViewLabel = signal($localize`:@@nxt-pick-datetime.switch-to-year-month:Choose month and year`)

    /** A label for the cancel button */
    readonly cancelBtnLabel = signal($localize`:@@nxt-pick-datetime.cancel:Cancel`)

    /** A label for the set button */
    readonly setBtnLabel = signal($localize`:@@nxt-pick-datetime.set:Set`)

    /** A label for the range 'from' in picker info */
    readonly rangeFromLabel = signal($localize`:@@nxt-pick-datetime.from:From`)

    /** A label for the range 'to' in picker info */
    readonly rangeToLabel = signal($localize`:@@nxt-pick-datetime.to:To`)

    /** A label for the hour12 button (AM) */
    readonly hour12AMLabel = signal($localize`:@@nxt-pick-datetime.time-am:AM`)

    /** A label for the hour12 button (PM) */
    readonly hour12PMLabel = signal($localize`:@@nxt-pick-datetime.time-pm:PM`)
}
