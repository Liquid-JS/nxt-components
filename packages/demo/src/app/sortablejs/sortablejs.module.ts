import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { SortablejsModule } from 'nxt-sortablejs'
import { ContentWrapComponent } from '../content-wrap/content-wrap.component'
import { ExamplesModule } from './examples/examples.module'
import { AppSortablejsRouterModule } from './sortablejs-routing.module'
import { AppSortablejsComponent } from './sortablejs.component'
import { TestCasesModule } from './test-cases/test-cases.module'

@NgModule({
    declarations: [
        AppSortablejsComponent
    ],
    imports: [
        CommonModule,
        ContentWrapComponent,
        AppSortablejsRouterModule,

        // global settings
        SortablejsModule.forRoot({
            animation: 200
        }),

        BsDropdownModule.forRoot(),

        ExamplesModule,
        TestCasesModule
    ],
    bootstrap: [AppSortablejsComponent]
})
export class AppSortablejsModule { }
