import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { JsonViewModule } from 'nxt-json-view'
import { CodeBlockComponent } from '../code-block/code-block.component'
import { ContentWrapComponent } from '../content-wrap/content-wrap.component'
import { ExampleComponent } from '../example/example.component'
import { InputsTableComponent } from '../inputs-table/inputs-table.component'
import { OutputsTableComponent } from '../outputs-table/outputs-table.component'
import { BasicExampleComponent } from './examples/basic-example/basic-example.component'
import { ExpansionParametersComponent } from './examples/expansion-parameters/expansion-parameters.component'
import { LevelLabelsComponent } from './examples/level-labels/level-labels.component'
import { LiveTestComponent } from './examples/live-test/live-test.component'
import { GettingStartedComponent } from './getting-started/getting-started.component'
import { AppJsonViewRoutingModule } from './json-view-routing.module'
import { AppJsonViewComponent } from './json-view/json-view.component'

@NgModule({
    declarations: [
        AppJsonViewComponent,
        BasicExampleComponent,
        ExpansionParametersComponent,
        LevelLabelsComponent,
        LiveTestComponent,
        GettingStartedComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        JsonViewModule,
        AppJsonViewRoutingModule,
        ContentWrapComponent,
        ExampleComponent,
        BsDropdownModule,
        CodeBlockComponent,
        InputsTableComponent,
        OutputsTableComponent
    ]
})
export class AppJsonViewModule { }
