import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { DateTimeModule } from 'nxt-pick-datetime'
import { NativeDateTimeModule } from 'nxt-pick-datetime/native-adapter'
import { ContentWrapComponent } from '../content-wrap/content-wrap.component'
import { ExampleComponent } from '../example/example.component'
import { BasicExampleComponent } from './examples/basic-example/basic-example.component'
import { CalendarOnlyComponent } from './examples/calendar-only/calendar-only.component'
import { FilterRestrictionComponent } from './examples/filter-restriction/filter-restriction.component'
import { MinMaxComponent } from './examples/min-max/min-max.component'
import { SelectRangeComponent } from './examples/select-range/select-range.component'
import { TimeOnlyComponent } from './examples/time-only/time-only.component'
import { TriggerIconComponent } from './examples/trigger-icon/trigger-icon.component'
import { AppPickDatetimeRoutingModule } from './pick-datetime-routing.module'
import { AppPickDatetimeComponent } from './pick-datetime/pick-datetime.component'

@NgModule({
    declarations: [
        AppPickDatetimeComponent,
        BasicExampleComponent,
        CalendarOnlyComponent,
        TimeOnlyComponent,
        TriggerIconComponent,
        SelectRangeComponent,
        MinMaxComponent,
        FilterRestrictionComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        DateTimeModule,
        NativeDateTimeModule,
        AppPickDatetimeRoutingModule,
        ContentWrapComponent,
        ExampleComponent,
        BsDropdownModule
    ],
    providers: [],
    bootstrap: [AppPickDatetimeComponent]
})
export class AppPickDatetimeModule { }
