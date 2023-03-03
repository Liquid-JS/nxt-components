import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { JsonViewModule } from 'json-view'
import { AppJsonViewRoutingModule } from './json-view-routing.module'
import { AppJsonViewComponent } from './json-view.component'

@NgModule({
    declarations: [
        AppJsonViewComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        JsonViewModule,
        AppJsonViewRoutingModule
    ]
})
export class AppJsonViewModule { }
