import { A11yModule } from '@angular/cdk/a11y'
import { OverlayModule } from '@angular/cdk/overlay'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { OwlDialogModule } from '../dialog/dialog.module'
import { OwlCalendarBodyComponent } from './calendar-body/calendar-body.component'
import { OwlMonthViewComponent } from './calendar-month-view/calendar-month-view.component'
import { OwlMultiYearViewComponent } from './calendar-multi-year-view/calendar-multi-year-view.component'
import { OwlYearViewComponent } from './calendar-year-view/calendar-year-view.component'
import { OwlCalendarComponent } from './calendar/calendar.component'
import { OwlDateTimeInlineComponent } from './date-time-inline/date-time-inline.component'
import { OwlDateTimeContainerComponent } from './date-time-picker-container/date-time-picker-container.component'
import { OwlDateTimeInputDirective } from './date-time-picker-input.directive'
import { OwlDateTimeIntl } from './date-time-picker-intl.service'
import { OwlDateTimeTriggerDirective } from './date-time-picker-trigger.directive'
import { OwlDateTimeComponent, OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER } from './date-time-picker/date-time-picker.component'
import { NumberFixedLenPipe } from './number-fixed-len.pipe'
import { OwlTimerBoxComponent } from './timer-box/timer-box.component'
import { OwlTimerComponent } from './timer/timer.component'

@NgModule({
    imports: [CommonModule, OverlayModule, OwlDialogModule, A11yModule],
    exports: [
        OwlCalendarComponent,
        OwlTimerComponent,
        OwlDateTimeTriggerDirective,
        OwlDateTimeInputDirective,
        OwlDateTimeComponent,
        OwlDateTimeInlineComponent,
        OwlMultiYearViewComponent,
        OwlYearViewComponent,
        OwlMonthViewComponent
    ],
    declarations: [
        OwlDateTimeTriggerDirective,
        OwlDateTimeInputDirective,
        OwlDateTimeComponent,
        OwlDateTimeContainerComponent,
        OwlMultiYearViewComponent,
        OwlYearViewComponent,
        OwlMonthViewComponent,
        OwlTimerComponent,
        OwlTimerBoxComponent,
        OwlCalendarComponent,
        OwlCalendarBodyComponent,
        NumberFixedLenPipe,
        OwlDateTimeInlineComponent
    ],
    providers: [
        OwlDateTimeIntl,
        OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER
    ]
})
export class OwlDateTimeModule { }
