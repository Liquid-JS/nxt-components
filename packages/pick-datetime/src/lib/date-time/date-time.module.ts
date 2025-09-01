import { NgModule } from '@angular/core'
import { MonthViewComponent } from './calendar-month-view/calendar-month-view.component'
import { MultiYearViewComponent } from './calendar-multi-year-view/calendar-multi-year-view.component'
import { YearViewComponent } from './calendar-year-view/calendar-year-view.component'
import { CalendarComponent } from './calendar/calendar.component'
import { DateTimeInlineComponent } from './date-time-inline/date-time-inline.component'
import { DateTimeInputDirective } from './date-time-picker-input.directive'
import { DateTimeTriggerDirective } from './date-time-picker-trigger.directive'
import { DateTimeComponent } from './date-time-picker/date-time-picker.component'
import { TimerComponent } from './timer/timer.component'

/** @deprecated use standalone imports */
@NgModule({
    imports: [
        CalendarComponent,
        TimerComponent,
        DateTimeTriggerDirective,
        DateTimeInputDirective,
        DateTimeComponent,
        DateTimeInlineComponent,
        MultiYearViewComponent,
        YearViewComponent,
        MonthViewComponent
    ],
    exports: [
        CalendarComponent,
        TimerComponent,
        DateTimeTriggerDirective,
        DateTimeInputDirective,
        DateTimeComponent,
        DateTimeInlineComponent,
        MultiYearViewComponent,
        YearViewComponent,
        MonthViewComponent
    ]
})
export class DateTimeModule { }
