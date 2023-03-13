// Based on @angular/cdk/testing
import { Platform, PlatformModule } from '@angular/cdk/platform'
import { EventEmitter, Inject, Injectable, NgModule, NgZone, Optional } from '@angular/core'
import { DateTimeAdapter, NXT_DATE_TIME_LOCALE } from './lib/class/date-time-adapter.class'
import { DateTimeFormats, NXT_DATE_TIME_FORMATS } from './lib/class/date-time-format.class'

export function dispatchEvent(node: Node | Window, event: Event): Event {
    node.dispatchEvent(event)
    return event
}

export function dispatchFakeEvent(
    node: Node | Window,
    type: string,
    canBubble?: boolean
): Event {
    return dispatchEvent(node, createFakeEvent(type, canBubble))
}

export function createFakeEvent(
    type: string,
    canBubble = false,
    cancelable = true
) {
    const event = document.createEvent('Event')
    event.initEvent(type, canBubble, cancelable)
    return event
}

export function dispatchKeyboardEvent(
    node: Node,
    type: string,
    keyCode: number,
    target?: Element
): KeyboardEvent {
    return dispatchEvent(
        node,
        createKeyboardEvent(type, keyCode, target)
    ) as KeyboardEvent
}

export function createKeyboardEvent(
    type: string,
    keyCode: number,
    target?: Element,
    key?: string
) {
    const event = document.createEvent('KeyboardEvent') as any
    const originalPreventDefault = event.preventDefault

    // Firefox does not support `initKeyboardEvent`, but supports `initKeyEvent`.
    if (event.initKeyEvent) {
        event.initKeyEvent(type, true, true, window, 0, 0, 0, 0, 0, keyCode)
    } else {
        event.initKeyboardEvent(type, true, true, window, 0, key, 0, '', false)
    }

    // Webkit Browsers don't set the keyCode when calling the init function.
    // See related bug https://bugs.webkit.org/show_bug.cgi?id=16735
    Object.defineProperties(event, {
        keyCode: { get: () => keyCode },
        key: { get: () => key },
        target: { get: () => target }
    })

    // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
    event.preventDefault = function () {
        Object.defineProperty(event, 'defaultPrevented', { get: () => true })
        return originalPreventDefault.apply(this, arguments)
    }

    return event
}

export function dispatchMouseEvent(
    node: Node,
    type: string,
    x = 0,
    y = 0,
    event = createMouseEvent(type, x, y)
): MouseEvent {
    return dispatchEvent(node, event) as MouseEvent
}

/** Creates a browser MouseEvent with the specified options. */
export function createMouseEvent(type: string, x = 0, y = 0, button = 0) {
    const event = document.createEvent('MouseEvent')

    event.initMouseEvent(
        type,
        true /* canBubble */,
        false /* cancelable */,
        window /* view */,
        0 /* detail */,
        x /* screenX */,
        y /* screenY */,
        x /* clientX */,
        y /* clientY */,
        false /* ctrlKey */,
        false /* altKey */,
        false /* shiftKey */,
        false /* metaKey */,
        button /* button */,
        null /* relatedTarget */
    )

    // `initMouseEvent` doesn't allow us to pass the `buttons` and
    // defaults it to 0 which looks like a fake event.
    Object.defineProperty(event, 'buttons', { get: () => 1 })

    return event
}

export class MockNgZone extends NgZone {
    override onStable = new EventEmitter<any>(false)
    constructor() {
        super({ enableLongStackTrace: false })
    }
    override run(fn: () => void): any {
        return fn()
    }
    override runOutsideAngular(fn: () => void): any {
        return fn()
    }
    simulateZoneExit(): void {
        this.onStable.emit(null)
    }
}

/** The default month names to use if Intl API is not available. */
const DEFAULT_MONTH_NAMES = {
    long: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    short: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ],
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
}

/** The default day of the week names to use if Intl API is not available. */
const DEFAULT_DAY_OF_WEEK_NAMES = {
    long: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ],
    short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
}

/** The default date names to use if Intl API is not available. */
const DEFAULT_DATE_NAMES = range(31, i => String(i + 1))

/** Whether the browser supports the Intl API. */
const SUPPORTS_INTL_API = typeof Intl !== 'undefined'

/**
 * Matches strings that have the form of a valid RFC 3339 string
 * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
 * because the regex will match strings an with out of bounds month, date, etc.
 */
const ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/

/** Creates an array and fills it with values. */
function range<T>(length: number, valueFunction: (index: number) => T): T[] {
    const valuesArray = Array(length)
    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i)
    }
    return valuesArray
}

@Injectable()
export class TestDateTimeAdapter extends DateTimeAdapter<Date> {
    /** Whether to clamp the date between 1 and 9999 to avoid IE and Edge errors. */
    private readonly _clampDate: boolean

    /**
     * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
     * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
     * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
     * will produce `'8/13/1800'`.
     */
    useUtcForDisplay: boolean

    constructor(
        platform: Platform,
        @Optional()
        @Inject(NXT_DATE_TIME_LOCALE)
        dateTimeLocale?: string
    ) {
        super()
        super.setLocale(dateTimeLocale)

        // IE does its own time zone correction, so we disable this on IE.
        this.useUtcForDisplay = !platform.TRIDENT
        this._clampDate = platform.TRIDENT || platform.EDGE
    }

    getYear(date: Date): number {
        return date.getFullYear()
    }

    getMonth(date: Date): number {
        return date.getMonth()
    }

    getDay(date: Date): number {
        return date.getDay()
    }

    getDate(date: Date): number {
        return date.getDate()
    }

    getHours(date: Date): number {
        return date.getHours()
    }

    getMinutes(date: Date): number {
        return date.getMinutes()
    }

    getSeconds(date: Date): number {
        return date.getSeconds()
    }

    getTime(date: Date): number {
        return date.getTime()
    }

    getNumDaysInMonth(date: Date): number {
        const lastDateOfMonth = this.createDateWithOverflow(
            this.getYear(date),
            this.getMonth(date) + 1,
            0
        )

        return this.getDate(lastDateOfMonth)
    }

    differenceInCalendarDays(dateLeft: Date, dateRight: Date): number | undefined {
        if (this.isValid(dateLeft) && this.isValid(dateRight)) {
            const dateLeftStartOfDay = this.createDate(
                this.getYear(dateLeft),
                this.getMonth(dateLeft),
                this.getDate(dateLeft)
            )
            const dateRightStartOfDay = this.createDate(
                this.getYear(dateRight),
                this.getMonth(dateRight),
                this.getDate(dateRight)
            )

            const timeStampLeft =
                this.getTime(dateLeftStartOfDay) -
                dateLeftStartOfDay.getTimezoneOffset() *
                this.milliseondsInMinute
            const timeStampRight =
                this.getTime(dateRightStartOfDay) -
                dateRightStartOfDay.getTimezoneOffset() *
                this.milliseondsInMinute
            return Math.round(
                (timeStampLeft - timeStampRight) / this.millisecondsInDay
            )
        }
        return
    }

    getYearName(date: Date): string {
        if (SUPPORTS_INTL_API) {
            const dtf = new Intl.DateTimeFormat(this.locale, {
                year: 'numeric',
                timeZone: 'utc'
            })
            return this.stripDirectionalityCharacters(this._format(dtf, date))
        }
        return String(this.getYear(date))
    }

    getMonthNames(style: 'long' | 'short' | 'narrow'): string[] {
        if (SUPPORTS_INTL_API) {
            const dtf = new Intl.DateTimeFormat(this.locale, {
                month: style,
                timeZone: 'utc'
            })
            return range(12, i =>
                this.stripDirectionalityCharacters(
                    this._format(dtf, new Date(2017, i, 1))
                )
            )
        }
        return DEFAULT_MONTH_NAMES[style]
    }

    getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
        if (SUPPORTS_INTL_API) {
            const dtf = new Intl.DateTimeFormat(this.locale, {
                weekday: style,
                timeZone: 'utc'
            })
            return range(7, i =>
                this.stripDirectionalityCharacters(
                    this._format(dtf, new Date(2017, 0, i + 1))
                )
            )
        }

        return DEFAULT_DAY_OF_WEEK_NAMES[style]
    }

    getDateNames(): string[] {
        if (SUPPORTS_INTL_API) {
            const dtf = new Intl.DateTimeFormat(this.locale, {
                day: 'numeric',
                timeZone: 'utc'
            })
            return range(31, i =>
                this.stripDirectionalityCharacters(
                    this._format(dtf, new Date(2017, 0, i + 1))
                )
            )
        }
        return DEFAULT_DATE_NAMES
    }

    toIso8601(date: Date): string {
        return date.toISOString()
    }

    isEqual(dateLeft: Date, dateRight: Date): boolean {
        if (this.isValid(dateLeft) && this.isValid(dateRight)) {
            return dateLeft.getTime() === dateRight.getTime()
        } else {
            return false
        }
    }

    isSameDay(dateLeft: Date, dateRight: Date): boolean {
        if (this.isValid(dateLeft) && this.isValid(dateRight)) {
            const dateLeftStartOfDay = this.clone(dateLeft)
            const dateRightStartOfDay = this.clone(dateRight)
            dateLeftStartOfDay.setHours(0, 0, 0, 0)
            dateRightStartOfDay.setHours(0, 0, 0, 0)
            return (
                dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
            )
        } else {
            return false
        }
    }

    isValid(date: Date): boolean {
        return date && !isNaN(date.getTime())
    }

    invalid(): Date {
        return new Date(NaN)
    }

    isDateInstance(obj: any): boolean {
        return obj instanceof Date
    }

    addCalendarYears(date: Date, amount: number): Date {
        return this.addCalendarMonths(date, amount * 12)
    }

    addCalendarMonths(date: Date, amount: number): Date {
        const result = this.clone(date)
        amount = Number(amount)

        const desiredMonth = result.getMonth() + amount
        const dateWithDesiredMonth = new Date(0)
        dateWithDesiredMonth.setFullYear(result.getFullYear(), desiredMonth, 1)
        dateWithDesiredMonth.setHours(0, 0, 0, 0)

        const daysInMonth = this.getNumDaysInMonth(dateWithDesiredMonth)
        // Set the last day of the new month
        // if the original date was the last day of the longer month
        result.setMonth(desiredMonth, Math.min(daysInMonth, result.getDate()))
        return result
    }

    addCalendarDays(date: Date, amount: number): Date {
        const result = this.clone(date)
        amount = Number(amount)
        result.setDate(result.getDate() + amount)
        return result
    }

    setHours(date: Date, amount: number): Date {
        const result = this.clone(date)
        result.setHours(amount)
        return result
    }

    setMinutes(date: Date, amount: number): Date {
        const result = this.clone(date)
        result.setMinutes(amount)
        return result
    }

    setSeconds(date: Date, amount: number): Date {
        const result = this.clone(date)
        result.setSeconds(amount)
        return result
    }

    createDate(
        year: number,
        month: number,
        date: number,
        hours: number = 0,
        minutes: number = 0,
        seconds: number = 0
    ): Date {
        if (month < 0 || month > 11) {
            throw Error(
                `Invalid month index "${month}". Month index has to be between 0 and 11.`
            )
        }

        if (date < 1) {
            throw Error(
                `Invalid date "${date}". Date has to be greater than 0.`
            )
        }

        if (hours < 0 || hours > 23) {
            throw Error(
                `Invalid hours "${hours}". Hours has to be between 0 and 23.`
            )
        }

        if (minutes < 0 || minutes > 59) {
            throw Error(
                `Invalid minutes "${minutes}". Minutes has to between 0 and 59.`
            )
        }

        if (seconds < 0 || seconds > 59) {
            throw Error(
                `Invalid seconds "${seconds}". Seconds has to be between 0 and 59.`
            )
        }

        const result = this.createDateWithOverflow(
            year,
            month,
            date,
            hours,
            minutes,
            seconds
        )

        // Check that the date wasn't above the upper bound for the month, causing the month to overflow
        // For example, createDate(2017, 1, 31) would try to create a date 2017/02/31 which is invalid
        if (result.getMonth() !== month) {
            throw Error(
                `Invalid date "${date}" for month with index "${month}".`
            )
        }

        return result
    }

    clone(date: Date): Date {
        return this.createDate(
            this.getYear(date),
            this.getMonth(date),
            this.getDate(date),
            this.getHours(date),
            this.getMinutes(date),
            this.getSeconds(date)
        )
    }

    now(): Date {
        return new Date()
    }

    format(date: Date, displayFormat: any): string {
        if (!this.isValid(date)) {
            throw Error('JSNativeDate: Cannot format invalid date.')
        }

        if (SUPPORTS_INTL_API) {
            if (
                this._clampDate &&
                (date.getFullYear() < 1 || date.getFullYear() > 9999)
            ) {
                date = this.clone(date)
                date.setFullYear(
                    Math.max(1, Math.min(9999, date.getFullYear()))
                )
            }

            displayFormat = { ...displayFormat, timeZone: 'utc' }
            const dtf = new Intl.DateTimeFormat(this.locale, displayFormat)
            return this.stripDirectionalityCharacters(this._format(dtf, date))
        }

        return this.stripDirectionalityCharacters(date.toDateString())
    }

    parse(value: any, _parseFormat: any): Date | undefined {
        // There is no way using the native JS Date to set the parse format or locale
        if (typeof value === 'number') {
            return new Date(value)
        }
        return value ? new Date(Date.parse(value)) : undefined
    }

    /**
     * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
     * invalid date for all other values.
     */
    override deserialize(value: any): Date | undefined {
        if (typeof value === 'string') {
            if (!value) {
                return undefined
            }
            // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
            // string is the right format first.
            if (ISO_8601_REGEX.test(value)) {
                const date = new Date(value)
                if (this.isValid(date)) {
                    return date
                }
            }
        }
        return super.deserialize(value)
    }

    /**
     * Creates a date but allows the month and date to overflow.
     */
    private createDateWithOverflow(
        year: number,
        month: number,
        date: number,
        hours: number = 0,
        minutes: number = 0,
        seconds: number = 0
    ): Date {
        const result = new Date(year, month, date, hours, minutes, seconds)

        if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900)
        }
        return result
    }

    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     */
    private stripDirectionalityCharacters(str: string) {
        return str.replace(/[\u200e\u200f]/g, '')
    }

    /**
     * When converting Date object to string, javascript built-in functions may return wrong
     * results because it applies its internal DST rules. The DST rules around the world change
     * very frequently, and the current valid rule is not always valid in previous years though.
     * We work around this problem building a new Date object which has its internal UTC
     * representation with the local date and time.
     */
    private _format(dtf: Intl.DateTimeFormat, date: Date) {
        const d = new Date(
            Date.UTC(
                date.getFullYear(),
                date.getMonth(),
                date.getDate(),
                date.getHours(),
                date.getMinutes(),
                date.getSeconds(),
                date.getMilliseconds()
            )
        )
        return dtf.format(d)
    }
}

export const NXT_TEST_DATE_TIME_FORMATS: DateTimeFormats = {
    parseInput: null,
    fullPickerInput: { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' },
    datePickerInput: { year: 'numeric', month: 'numeric', day: 'numeric' },
    timePickerInput: { hour: 'numeric', minute: 'numeric' },
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' }
}

@NgModule({
    imports: [PlatformModule],
    providers: [
        { provide: DateTimeAdapter, useClass: TestDateTimeAdapter },
        { provide: NXT_DATE_TIME_FORMATS, useValue: NXT_TEST_DATE_TIME_FORMATS }
    ]
})
export class TestDateTimeModule { }
