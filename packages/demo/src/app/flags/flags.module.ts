import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { FlagsModule } from 'flags'
import { FlagsRoutingModule } from './flags-routing.module'
import { AppFlagsComponent } from './flags.component'

@NgModule({
    declarations: [
        AppFlagsComponent
    ],
    imports: [
        CommonModule,
        FlagsModule,
        FormsModule,
        FlagsRoutingModule
    ]
})
export class AppFlagsModule { }
