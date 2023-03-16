import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { SortablejsModule } from 'nxt-sortablejs'
import { CodeBlockComponent } from '../code-block/code-block.component'
import { ContentWrapComponent } from '../content-wrap/content-wrap.component'
import { ExampleComponent } from '../example/example.component'
import { InputsTableComponent } from '../inputs-table/inputs-table.component'
import { OutputsTableComponent } from '../outputs-table/outputs-table.component'
import { DemosComponent } from './demos/demos.component'
import { ExamplesModule } from './examples-e/examples.module'
import { BasicExampleComponent } from './examples/basic-example/basic-example.component'
import { AppSortablejsRouterModule } from './sortablejs-routing.module'
import { AppSortablejsComponent } from './sortablejs/sortablejs.component'
import { TestCasesModule } from './test-cases/test-cases.module'

@NgModule({
    declarations: [
        AppSortablejsComponent,
        DemosComponent,
        BasicExampleComponent
    ],
    imports: [
        CommonModule,
        ContentWrapComponent,
        AppSortablejsRouterModule,

        // global settings
        SortablejsModule.forRoot({
            animation: 200
        }),

        BsDropdownModule,

        ExamplesModule,

        ExampleComponent,
        TestCasesModule,
        CodeBlockComponent,
        InputsTableComponent,
        OutputsTableComponent
    ],
    bootstrap: [AppSortablejsComponent]
})
export class AppSortablejsModule { }
