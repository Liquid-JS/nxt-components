import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MetaDirective } from './meta.directive'

@NgModule({
    declarations: [
        MetaDirective
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        MetaDirective
    ]
})
export class MetaModule { }
