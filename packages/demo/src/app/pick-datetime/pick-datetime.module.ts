import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { DateTimeModule } from 'nxt-pick-datetime'
import { NativeDateTimeModule } from 'nxt-pick-datetime/native-adapter'
import { ContentWrapComponent } from '../content-wrap/content-wrap.component'
import { AppPickDatetimeRoutingModule } from './pick-datetime-routing.module'
import { AppPickDatetimeComponent } from './pick-datetime/pick-datetime.component'

@NgModule({
    declarations: [
        AppPickDatetimeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        DateTimeModule,
        NativeDateTimeModule,
        AppPickDatetimeRoutingModule,
        ContentWrapComponent
    ],
    providers: [],
    bootstrap: [AppPickDatetimeComponent]
})
export class AppPickDatetimeModule { }
