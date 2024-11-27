import"./chunk-2R6CW7ES.js";var r=`// @ts-nocheck\r
\r
import { Injectable, NgModule } from '@angular/core'\r
import { CustomDateModel } from 'custom-date-library'\r
import { DateTimeAdapter, DateTimeFormats, NXT_DATE_TIME_FORMATS } from 'nxt-pick-datetime'\r
\r
// Provide formatting strings for your date adapter implementation\r
export const CUSTOM_DATE_TIME_FORMATS: DateTimeFormats = {\r
    parseInput: 'formatting string for your implementation',\r
    fullPickerInput: 'formatting string for your implementation',\r
    datePickerInput: 'formatting string for your implementation',\r
    timePickerInput: 'formatting string for your implementation',\r
    monthYearLabel: 'formatting string for your implementation',\r
    dateA11yLabel: 'formatting string for your implementation',\r
    monthYearA11yLabel: 'formatting string for your implementation'\r
}\r
\r
@Injectable()\r
export class CustomDateTimeAdapter extends DateTimeAdapter<CustomDateModel> {\r
    // Implement DateTimeAdapter here\r
}\r
\r
@NgModule({\r
    providers: [\r
        {\r
            provide: DateTimeAdapter,\r
            useClass: CustomDateTimeAdapter\r
        },\r
        {\r
            provide: NXT_DATE_TIME_FORMATS,\r
            useValue: CUSTOM_DATE_TIME_FORMATS\r
        }\r
    ]\r
})\r
export class CustomDateTimeModule { }\r
`;export{r as default};
