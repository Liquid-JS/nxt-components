import { A11yModule } from '@angular/cdk/a11y'
import { OverlayModule } from '@angular/cdk/overlay'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { DialogModule } from '../dialog/dialog.module'
import { CalendarBodyComponent } from './calendar-body/calendar-body.component'
import { MonthViewComponent } from './calendar-month-view/calendar-month-view.component'
import { MultiYearViewComponent } from './calendar-multi-year-view/calendar-multi-year-view.component'
import { YearViewComponent } from './calendar-year-view/calendar-year-view.component'
import { CalendarComponent } from './calendar/calendar.component'
import { DateTimeInlineComponent } from './date-time-inline/date-time-inline.component'
import { DateTimeContainerComponent } from './date-time-picker-container/date-time-picker-container.component'
import { DateTimeInputDirective } from './date-time-picker-input.directive'
import { DateTimeIntl } from './date-time-picker-intl.service'
import { DateTimeTriggerDirective } from './date-time-picker-trigger.directive'
import { DateTimeComponent, NXT_DTPICKER_SCROLL_STRATEGY_PROVIDER } from './date-time-picker/date-time-picker.component'
import { NumberFixedLenPipe } from './number-fixed-len.pipe'
import { TimerBoxComponent } from './timer-box/timer-box.component'
import { TimerComponent } from './timer/timer.component'

@NgModule({
    declarations: [
        DateTimeTriggerDirective,
        DateTimeInputDirective,
        DateTimeComponent,
        DateTimeContainerComponent,
        MultiYearViewComponent,
        YearViewComponent,
        MonthViewComponent,
        TimerComponent,
        TimerBoxComponent,
        CalendarComponent,
        CalendarBodyComponent,
        NumberFixedLenPipe,
        DateTimeInlineComponent
    ],
    imports: [
        CommonModule,
        OverlayModule,
        DialogModule,
        A11yModule
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
    ],
    providers: [
        DateTimeIntl,
        NXT_DTPICKER_SCROLL_STRATEGY_PROVIDER
    ]
})
export class DateTimeModule { }
