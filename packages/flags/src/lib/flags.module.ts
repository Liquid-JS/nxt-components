import { NgModule } from '@angular/core'
import { FlagComponent } from './flag/flag.component'

/** @deprecated use standalone imports */
@NgModule({
    imports: [
        FlagComponent
    ],
    exports: [
        FlagComponent
    ]
})
export class FlagsModule { }
