import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { JsonViewItemComponent } from './json-view-item/json-view-item.component'
import { JsonViewComponent } from './json-view/json-view.component'

@NgModule({
    declarations: [
        JsonViewItemComponent,
        JsonViewComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        JsonViewComponent
    ]
})
export class JsonViewModule { }
