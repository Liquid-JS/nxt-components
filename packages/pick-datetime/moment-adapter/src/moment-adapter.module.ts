import { NgModule } from '@angular/core'
import { OWL_DATE_TIME_FORMATS } from '../../src/lib/class/date-time-format.class'
import { DateTimeAdapter, OWL_DATE_TIME_LOCALE } from '../../src/lib/class/date-time-adapter.class'
import { MomentDateTimeAdapter, OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS } from './date-time-adapter.class'
import { OWL_MOMENT_DATE_TIME_FORMATS } from './date-time-format.class'

@NgModule({
    providers: [
        {
            provide: DateTimeAdapter,
            useClass: MomentDateTimeAdapter,
            deps: [OWL_DATE_TIME_LOCALE, OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS]
        }
    ]
})
export class MomentDateTimeModule { }

@NgModule({
    imports: [MomentDateTimeModule],
    providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: OWL_MOMENT_DATE_TIME_FORMATS }]
})
export class OwlMomentDateTimeModule { }
