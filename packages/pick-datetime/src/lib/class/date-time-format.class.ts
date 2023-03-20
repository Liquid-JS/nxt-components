import { InjectionToken } from '@angular/core'

export interface DateTimeFormats {
    parseInput: any
    fullPickerInput: any
    datePickerInput: any
    timePickerInput: any
    monthYearLabel: any
    dateA11yLabel: any
    monthYearA11yLabel: any
}

/** InjectionToken for date time picker that can be used to override default format */
export const NXT_DATE_TIME_FORMATS = new InjectionToken<DateTimeFormats>('NXT_DATE_TIME_FORMATS')
