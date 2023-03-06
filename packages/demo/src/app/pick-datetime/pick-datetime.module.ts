import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { OwlDateTimeModule } from 'nxt-pick-datetime'
import { OwlNativeDateTimeModule } from 'nxt-pick-datetime/native-adapter'
import { AppPickDatetimeRoutingModule } from './pick-datetime-routing.module'
import { AppPickDatetimeComponent } from './pick-datetime.component'

@NgModule({
    declarations: [
        AppPickDatetimeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        AppPickDatetimeRoutingModule
    ],
    providers: [],
    bootstrap: [AppPickDatetimeComponent]
})
export class AppPickDatetimeModule { }
