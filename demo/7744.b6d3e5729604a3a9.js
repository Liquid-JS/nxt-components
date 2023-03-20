"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7744],{7744:t=>{t.exports="import { Injectable, NgModule } from '@angular/core'\nimport { CustomDateModel } from 'custom-date-library'\nimport { DateTimeAdapter, DateTimeFormats, NXT_DATE_TIME_FORMATS } from 'nxt-pick-datetime'\n\n// Provide formatting strings for your date adapter implementation\nexport const CUSTOM_DATE_TIME_FORMATS: DateTimeFormats = {\n    parseInput: 'formatting string for your implementation',\n    fullPickerInput: 'formatting string for your implementation',\n    datePickerInput: 'formatting string for your implementation',\n    timePickerInput: 'formatting string for your implementation',\n    monthYearLabel: 'formatting string for your implementation',\n    dateA11yLabel: 'formatting string for your implementation',\n    monthYearA11yLabel: 'formatting string for your implementation'\n}\n\n@Injectable()\nexport class CustomDateTimeAdapter extends DateTimeAdapter<CustomDateModel> {\n    // Implement DateTimeAdapter here\n}\n\n@NgModule({\n    providers: [\n        {\n            provide: DateTimeAdapter,\n            useClass: CustomDateTimeAdapter\n        },\n        {\n            provide: NXT_DATE_TIME_FORMATS,\n            useValue: CUSTOM_DATE_TIME_FORMATS\n        }\n    ]\n})\nexport class CustomDateTimeModel { }\n"}}]);