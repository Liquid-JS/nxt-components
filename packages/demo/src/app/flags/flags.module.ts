import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { FlagsModule } from 'nxt-flags'
import { ContentWrapComponent } from '../content-wrap/content-wrap.component'
import { ExampleComponent } from '../example/example.component'
import { BasicExampleComponent } from './examples/basic-example/basic-example.component'
import { AppFlagsRoutingModule } from './flags-routing.module'
import { AppFlagsComponent } from './flags.component'

@NgModule({
    declarations: [
        AppFlagsComponent,
        BasicExampleComponent
    ],
    imports: [
        CommonModule,
        FlagsModule,
        FormsModule,
        AppFlagsRoutingModule,
        ContentWrapComponent,
        ExampleComponent
    ]
})
export class AppFlagsModule { }
