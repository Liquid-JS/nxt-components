import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { SortablejsModule } from 'nxt-sortablejs'
import { ExamplesModule } from './examples/examples.module'
import { AppSortablejsRouterModule } from './sortablejs-routing.module'
import { AppSortablejsComponent } from './sortablejs.component'
import { TestCasesModule } from './test-cases/test-cases.module'

@NgModule({
    declarations: [
        AppSortablejsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
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
