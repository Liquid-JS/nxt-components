import { LOCALE_ID, NgModule } from '@angular/core'
import { DateTimeAdapter, NXT_DATE_TIME_FORMATS } from 'nxt-pick-datetime'
import { MomentDateTimeAdapter, NXT_MOMENT_DATE_TIME_ADAPTER_OPTIONS } from './date-time-adapter.class'
import { NXT_MOMENT_DATE_TIME_FORMATS } from './date-time-format.class'

@NgModule({
    providers: [
        {
            provide: DateTimeAdapter,
            useClass: MomentDateTimeAdapter,
            deps: [LOCALE_ID, NXT_MOMENT_DATE_TIME_ADAPTER_OPTIONS]
        },
        {
            provide: NXT_DATE_TIME_FORMATS,
            useValue: NXT_MOMENT_DATE_TIME_FORMATS
        }
    ]
})
export class MomentDateTimeModule { }
