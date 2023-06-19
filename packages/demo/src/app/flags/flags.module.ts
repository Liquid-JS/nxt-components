import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { FlagsModule } from 'nxt-flags'
import { CodeBlockComponent } from '../code-block/code-block.component'
import { ContentWrapComponent } from '../content-wrap/content-wrap.component'
import { ExampleComponent } from '../example/example.component'
import { InputsTableComponent } from '../inputs-table/inputs-table.component'
import { MetaModule } from '../meta/meta.module'
import { OutputsTableComponent } from '../outputs-table/outputs-table.component'
import { BasicExampleComponent } from './examples/basic-example/basic-example.component'
import { AppFlagsRoutingModule } from './flags-routing.module'
import { AppFlagsComponent } from './flags/flags.component'
import { GettingStartedComponent } from './getting-started/getting-started.component'

@NgModule({
    declarations: [
        AppFlagsComponent,
        BasicExampleComponent,
        GettingStartedComponent
    ],
    imports: [
        CommonModule,
        FlagsModule,
        FormsModule,
        AppFlagsRoutingModule,
        ContentWrapComponent,
        ExampleComponent,
        CodeBlockComponent,
        InputsTableComponent,
        OutputsTableComponent,
        MetaModule
    ]
})
export class AppFlagsModule { }
