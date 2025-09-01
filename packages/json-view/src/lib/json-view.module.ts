import { NgModule } from '@angular/core'
import { JsonViewComponent } from './json-view/json-view.component'

/** @deprecated use standalone imports */
@NgModule({
    imports: [
        JsonViewComponent
    ],
    exports: [
        JsonViewComponent
    ]
})
export class JsonViewModule { }
