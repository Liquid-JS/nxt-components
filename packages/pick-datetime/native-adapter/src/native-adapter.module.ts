import { PlatformModule } from '@angular/cdk/platform'
import { NgModule } from '@angular/core'
import { DateTimeAdapter, OWL_DATE_TIME_FORMATS } from 'nxt-pick-datetime'
import { NativeDateTimeAdapter } from './date-time-adapter.class'
import { OWL_NATIVE_DATE_TIME_FORMATS } from './date-time-format.class'

@NgModule({
    imports: [PlatformModule],
    providers: [
        { provide: DateTimeAdapter, useClass: NativeDateTimeAdapter }
    ]
})
export class NativeDateTimeModule { }

@NgModule({
    imports: [NativeDateTimeModule],
    providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: OWL_NATIVE_DATE_TIME_FORMATS }]
})
export class OwlNativeDateTimeModule { }
