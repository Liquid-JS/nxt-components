import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { JsonViewItemComponent } from './json-view-item/json-view-item.component'
import { NxtJsonViewComponent } from './nxt-json-view/nxt-json-view.component'

@NgModule({
    declarations: [
        JsonViewItemComponent,
        NxtJsonViewComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NxtJsonViewComponent
    ]
})
export class NxtJsonViewModule { }
