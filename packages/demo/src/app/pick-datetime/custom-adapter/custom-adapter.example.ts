import { Injectable, NgModule } from '@angular/core'
import { CustomDateModel } from 'custom-date-library'
import { DateTimeAdapter, DateTimeModule, NXT_DATE_TIME_FORMATS } from 'nxt-pick-datetime'

// Provide formatting strings for your date adapter implementation
export const CUSTOM_DATE_TIME_FORMATS = {
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

@NgModule({
    imports: [
        DateTimeModule
    ],
    providers: [
        {
            provide: DateTimeAdapter,
            useClass: CustomDateTimeAdapter
        },
        {
            provide: NXT_DATE_TIME_FORMATS,
            useValue: CUSTOM_DATE_TIME_FORMATS
        }
    ]
})
export class CustomDateTimeModel { }
