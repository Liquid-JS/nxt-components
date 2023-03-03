import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlagComponent } from './flag/flag.component'

@NgModule({
    declarations: [
        FlagComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FlagComponent
    ]
})
export class FlagsModule { }
