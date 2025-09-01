// @ts-nocheck

import { Injectable } from '@angular/core'
import { CustomDateModel } from 'custom-date-library'
import { DateTimeAdapter, DateTimeFormats, NXT_DATE_TIME_FORMATS } from 'nxt-pick-datetime'

// Provide formatting strings for your date adapter implementation
export const CUSTOM_DATE_TIME_FORMATS: DateTimeFormats = {
    parseInput: 'formatting string for your implementation',
    fullPickerInput: 'formatting string for your implementation',
    datePickerInput: 'formatting string for your implementation',
    timePickerInput: 'formatting string for your implementation',
    monthYearLabel: 'formatting string for your implementation',
    dateA11yLabel: 'formatting string for your implementation',
    monthYearA11yLabel: 'formatting string for your implementation'
}

@Injectable()
export class CustomDateTimeAdapter extends DateTimeAdapter<CustomDateModel> {
    // Implement DateTimeAdapter here
}

export function provideCustomDateTimeAdapter(): Provider[] {
    return [
        {
            provide: DateTimeAdapter,
            useClass: CustomDateTimeAdapter
        },
        {
            provide: NXT_DATE_TIME_FORMATS,
            useValue: CUSTOM_DATE_TIME_FORMATS
        }
    ]
}
