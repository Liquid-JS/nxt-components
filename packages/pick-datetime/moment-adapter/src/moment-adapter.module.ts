import { LOCALE_ID, NgModule, Provider } from '@angular/core'
import { DateTimeAdapter, NXT_DATE_TIME_FORMATS } from 'nxt-pick-datetime'
import { MomentDateTimeAdapter, NXT_MOMENT_DATE_TIME_ADAPTER_OPTIONS } from './date-time-adapter.class'
import { NXT_MOMENT_DATE_TIME_FORMATS } from './date-time-format.class'

export function provideMomentDateTimeAdapter(): Provider[] {
    return [
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
}

/** @deprecated use provideMomentDateTimeAdapter */
@NgModule({
    providers: [
        provideMomentDateTimeAdapter()
    ]
})
export class MomentDateTimeModule { }
