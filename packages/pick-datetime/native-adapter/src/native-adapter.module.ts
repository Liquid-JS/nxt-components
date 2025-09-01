import { PlatformModule } from '@angular/cdk/platform'
import { NgModule, Provider } from '@angular/core'
import { DateTimeAdapter, NXT_DATE_TIME_FORMATS } from 'nxt-pick-datetime'
import { NativeDateTimeAdapter } from './date-time-adapter.class'
import { NXT_NATIVE_DATE_TIME_FORMATS } from './date-time-format.class'

export function provideNativeDateTimeAdapter(): Provider[] {
    return [
        {
            provide: DateTimeAdapter,
            useClass: NativeDateTimeAdapter
        },
        {
            provide: NXT_DATE_TIME_FORMATS,
            useValue: NXT_NATIVE_DATE_TIME_FORMATS
        }
    ]
}

/** @deprecated use provideNativeDateTimeAdapter */
@NgModule({
    imports: [PlatformModule],
    providers: [
        provideNativeDateTimeAdapter()
    ]
})
export class NativeDateTimeModule { }
