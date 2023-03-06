import { PlatformModule } from '@angular/cdk/platform'
import { NgModule } from '@angular/core'
import { DateTimeAdapter, NXT_DATE_TIME_FORMATS } from 'nxt-pick-datetime'
import { NativeDateTimeAdapter } from './date-time-adapter.class'
import { NXT_NATIVE_DATE_TIME_FORMATS } from './date-time-format.class'

@NgModule({
    imports: [PlatformModule],
    providers: [
        {
            provide: DateTimeAdapter,
            useClass: NativeDateTimeAdapter
        },
        {
            provide: NXT_DATE_TIME_FORMATS,
            useValue: NXT_NATIVE_DATE_TIME_FORMATS
        }
    ]
})
export class NativeDateTimeModule { }
