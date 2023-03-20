import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { SortablejsModule } from 'nxt-sortablejs'
import { CodeBlockComponent } from '../code-block/code-block.component'
import { ContentWrapComponent } from '../content-wrap/content-wrap.component'
import { ExampleComponent } from '../example/example.component'
import { InputsTableComponent } from '../inputs-table/inputs-table.component'
import { OutputsTableComponent } from '../outputs-table/outputs-table.component'
import { DemosComponent } from './demos/demos.component'
import { BasicExampleComponent } from './examples/basic-example/basic-example.component'
import { ComplexExampleComponent } from './examples/complex-example/complex-example.component'
import { DisabledOptionsComponent } from './examples/disabled-options/disabled-options.component'
import { EventsComponent } from './examples/events/events.component'
import { FormArrayComponent } from './examples/form-array/form-array.component'
import { ItemCloneComponent } from './examples/item-clone/item-clone.component'
import { ScrollingOptionsComponent } from './examples/scrolling-options/scrolling-options.component'
import { TransferListsComponent } from './examples/transfer-lists/transfer-lists.component'
import { GettingStartedComponent } from './getting-started/getting-started.component'
import { AppSortablejsRouterModule } from './sortablejs-routing.module'
import { AppSortablejsComponent } from './sortablejs/sortablejs.component'

@NgModule({
    declarations: [
        AppSortablejsComponent,
        DemosComponent,
        BasicExampleComponent,
        FormArrayComponent,
        DisabledOptionsComponent,
        EventsComponent,
        ScrollingOptionsComponent,
        TransferListsComponent,
        ItemCloneComponent,
        ComplexExampleComponent,
        GettingStartedComponent
    ],
    imports: [
        CommonModule,
        ContentWrapComponent,
        AppSortablejsRouterModule,
        SortablejsModule.forRoot({
            animation: 200
        }),
        BsDropdownModule,
        ExampleComponent,
        CodeBlockComponent,
        InputsTableComponent,
        OutputsTableComponent,
        FormsModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppSortablejsComponent]
})
export class AppSortablejsModule { }
