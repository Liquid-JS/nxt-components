import { Inject, Injectable, InjectionToken, LOCALE_ID, Optional } from '@angular/core'
import moment, { Moment } from 'moment'
import { DateTimeAdapter } from 'nxt-pick-datetime'

/** Configurable options for {@see MomentDateAdapter}. */
export interface MomentDateTimeAdapterOptions {
    /**
     * Turns the use of utc dates on or off.
     * Changing this will change how the DateTimePicker output value.
     * {@default false}
     */
    useUtc: boolean
}

/** InjectionToken for moment date adapter to configure options. */
export const NXT_MOMENT_DATE_TIME_ADAPTER_OPTIONS = new InjectionToken<MomentDateTimeAdapterOptions>(
    'NXT_MOMENT_DATE_TIME_ADAPTER_OPTIONS', {
    providedIn: 'root',
    factory: NXT_MOMENT_DATE_TIME_ADAPTER_OPTIONS_FACTORY
})

/** @internal */
export function NXT_MOMENT_DATE_TIME_ADAPTER_OPTIONS_FACTORY(): MomentDateTimeAdapterOptions {
    return {
        useUtc: false
    }
}

/**
 * Creates an array and fills it with values.
 *
 * @internal
 */
function range<T>(length: number, valueFunction: (index: number) => T): T[] {
    const valuesArray = Array(length)
    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i)
    }
    return valuesArray
}

@Injectable()
export class MomentDateTimeAdapter extends DateTimeAdapter<Moment> {

    private _localeData: {
        longMonths: string[]
        shortMonths: string[]
        longDaysOfWeek: string[]
        shortDaysOfWeek: string[]
        narrowDaysOfWeek: string[]
        dates: string[]
    } = {} as any

    constructor(
        @Optional()
        @Inject(LOCALE_ID)
        dateTimeLocale?: string,
        @Optional()
        @Inject(NXT_MOMENT_DATE_TIME_ADAPTER_OPTIONS)
        private readonly options?: MomentDateTimeAdapterOptions
    ) {
        super()
        this.setLocale(dateTimeLocale || moment.locale())
    }

    override setLocale(locale: string) {
        super.setLocale(locale)

        const momentLocaleData = moment.localeData(locale)
        this._localeData = {
            longMonths: momentLocaleData.months(),
            shortMonths: momentLocaleData.monthsShort(),
            longDaysOfWeek: momentLocaleData.weekdays(),
            shortDaysOfWeek: momentLocaleData.weekdaysShort(),
            narrowDaysOfWeek: momentLocaleData.weekdaysMin(),
            dates: range(31, (i) => this.createDate(2017, 0, i + 1).format('D'))
        }
    }

    getYear(date: Moment): number {
        return this.clone(date).year()
    }

    getMonth(date: Moment): number {
        return this.clone(date).month()
    }

    getDay(date: Moment): number {
        return this.clone(date).day()
    }

    getDate(date: Moment): number {
        return this.clone(date).date()
    }

    getHours(date: Moment): number {
        return this.clone(date).hours()
    }

    getMinutes(date: Moment): number {
        return this.clone(date).minutes()
    }

    getSeconds(date: Moment): number {
        return this.clone(date).seconds()
    }

    getTime(date: Moment): number {
        return this.clone(date).valueOf()
    }

    getNumDaysInMonth(date: Moment): number {
        return this.clone(date).daysInMonth()
    }

    differenceInCalendarDays(dateLeft: Moment, dateRight: Moment): number {
        return this.clone(dateLeft).diff(dateRight, 'days')
    }

    getYearName(date: Moment): string {
        return this.clone(date).format('YYYY')
    }

    getMonthNames(style: 'long' | 'short' | 'narrow'): string[] {
        return style === 'long' ? this._localeData.longMonths : this._localeData.shortMonths
    }

    getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
        if (style === 'long') {
            return this._localeData.longDaysOfWeek
        }
        if (style === 'short') {
            return this._localeData.shortDaysOfWeek
        }
        return this._localeData.narrowDaysOfWeek
    }

    getDateNames(): string[] {
        return this._localeData.dates
    }

    toIso8601(date: Moment): string {
        return this.clone(date).format()
    }

    isEqual(dateLeft: Moment, dateRight: Moment): boolean {

        if (dateLeft && dateRight) {
            return this.clone(dateLeft).isSame(this.clone(dateRight))
        }

        return dateLeft === dateRight
    }

    isSameDay(dateLeft: Moment, dateRight: Moment): boolean {

        if (dateLeft && dateRight) {
            return this.clone(dateLeft).isSame(this.clone(dateRight), 'day')
        }

        return dateLeft === dateRight
    }

    isValid(date: Moment): boolean {
        return this.clone(date).isValid()
    }

    invalid(): Moment {
        return moment.invalid()
    }

    isDateInstance(obj: any): boolean {
        return moment.isMoment(obj)
    }

    addCalendarYears(date: Moment, amount: number): Moment {
        return this.clone(date).add({ years: amount })
    }

    addCalendarMonths(date: Moment, amount: number): Moment {
        return this.clone(date).add({ months: amount })
    }

    addCalendarDays(date: Moment, amount: number): Moment {
        return this.clone(date).add({ days: amount })
    }

    setHours(date: Moment, amount: number): Moment {
        return this.clone(date).hours(amount)
    }

    setMinutes(date: Moment, amount: number): Moment {
        return this.clone(date).minutes(amount)
    }

    setSeconds(date: Moment, amount: number): Moment {
        return this.clone(date).seconds(amount)
    }

    createDate(year: number, month: number, date: number): Moment
    createDate(year: number, month: number, date: number, hours: number = 0, minutes: number = 0, seconds: number = 0): Moment {
        if (month < 0 || month > 11) {
            throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`)
        }

        if (date < 1) {
            throw Error(`Invalid date "${date}". Date has to be greater than 0.`)
        }

        if (hours < 0 || hours > 23) {
            throw Error(`Invalid hours "${hours}". Hours has to be between 0 and 23.`)
        }

        if (minutes < 0 || minutes > 59) {
            throw Error(`Invalid minutes "${minutes}". Minutes has to between 0 and 59.`)
        }

        if (seconds < 0 || seconds > 59) {
            throw Error(`Invalid seconds "${seconds}". Seconds has to be between 0 and 59.`)
        }

        const result = this.createMoment({ year, month, date, hours, minutes, seconds }).locale(this.locale)

        // If the result isn't valid, the date must have been out of bounds for this month.
        if (!result.isValid()) {
            throw Error(`Invalid date "${date}" for month with index "${month}".`)
        }

        return result
    }

    clone(date: Moment): Moment {
        return this.createMoment(date).clone().locale(this.locale)
    }

    now(): Moment {
        return this.createMoment().locale(this.locale)
    }

    format(date: Moment, displayFormat: any): string {
        date = this.clone(date)
        if (!this.isValid(date)) {
            throw Error('MomentDateTimeAdapter: Cannot format invalid date.')
        }
        return date.format(displayFormat)
    }

    parse(value: any, parseFormat: any): Moment | undefined {
        if (value && typeof value === 'string') {
            return this.createMoment(value, parseFormat, this.locale)
        }
        return value ? this.createMoment(value).locale(this.locale) : undefined
    }

    /**
     * Returns the given value if given a valid Moment or undefined. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
     * string into undefined. Returns an invalid date for all other values.
     */
    override deserialize(value: any): Moment | undefined {
        let date
        if (value instanceof Date) {
            date = this.createMoment(value)
        }
        if (typeof value === 'string') {
            if (!value) {
                return undefined
            }
            date = this.createMoment(value, moment.ISO_8601).locale(this.locale)
        }
        if (date && this.isValid(date)) {
            return date
        }
        return super.deserialize(value)
    }

    /** Creates a Moment instance while respecting the current UTC settings. */
    private createMoment(...args: any[]): Moment {
        return (this.options && this.options.useUtc) ? moment.utc(...args) : moment(...args)
    }
}
