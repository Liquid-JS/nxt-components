import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { DateTimeModule } from 'nxt-pick-datetime'
import { NativeDateTimeModule } from 'nxt-pick-datetime/native-adapter'
import { CodeBlockComponent } from '../code-block/code-block.component'
import { ContentWrapComponent } from '../content-wrap/content-wrap.component'
import { ExampleComponent } from '../example/example.component'
import { InputsTableComponent } from '../inputs-table/inputs-table.component'
import { MetaModule } from '../meta/meta.module'
import { OutputsTableComponent } from '../outputs-table/outputs-table.component'
import { AccessibilityComponent } from './accessibility/accessibility.component'
import { CustomAdapterComponent } from './custom-adapter/custom-adapter.component'
import { BasicExampleComponent } from './examples/basic-example/basic-example.component'
import { CalendarOnlyComponent } from './examples/calendar-only/calendar-only.component'
import { FilterRestrictionComponent } from './examples/filter-restriction/filter-restriction.component'
import { MinMaxComponent } from './examples/min-max/min-max.component'
import { SelectRangeComponent } from './examples/select-range/select-range.component'
import { TimeOnlyComponent } from './examples/time-only/time-only.component'
import { TriggerIconComponent } from './examples/trigger-icon/trigger-icon.component'
import { GettingStartedComponent } from './getting-started/getting-started.component'
import { AppPickDatetimeRoutingModule } from './pick-datetime-routing.module'
import { AppPickDatetimeComponent } from './pick-datetime/pick-datetime.component'
import { FilterComponent } from './validation/filter/filter.component'
import { InvalidInputComponent } from './validation/invalid-input/invalid-input.component'
import { ValidateMinMaxComponent } from './validation/min-max/min-max.component'
import { RangeComponent } from './validation/range/range.component'
import { ValidationComponent } from './validation/validation.component'

@NgModule({
    declarations: [
        AppPickDatetimeComponent,
        BasicExampleComponent,
        CalendarOnlyComponent,
        TimeOnlyComponent,
        TriggerIconComponent,
        SelectRangeComponent,
        MinMaxComponent,
        FilterRestrictionComponent,
        GettingStartedComponent,
        AccessibilityComponent,
        ValidationComponent,
        InvalidInputComponent,
        ValidateMinMaxComponent,
        FilterComponent,
        RangeComponent,
        CustomAdapterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        DateTimeModule,
        NativeDateTimeModule,
        AppPickDatetimeRoutingModule,
        ContentWrapComponent,
        ExampleComponent,
        BsDropdownModule,
        CodeBlockComponent,
        InputsTableComponent,
        OutputsTableComponent,
        MetaModule
    ],
    providers: [],
    bootstrap: [AppPickDatetimeComponent]
})
export class AppPickDatetimeModule { }
