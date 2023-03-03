import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { FlagsModule } from 'flags'
import { AppFlagsRoutingModule } from './flags-routing.module'
import { AppFlagsComponent } from './flags.component'

@NgModule({
    declarations: [
        AppFlagsComponent
    ],
    imports: [
        CommonModule,
        FlagsModule,
        FormsModule,
        AppFlagsRoutingModule
    ]
})
export class AppFlagsModule { }
