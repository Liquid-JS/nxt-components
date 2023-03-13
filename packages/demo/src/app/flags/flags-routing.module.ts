import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppFlagsComponent } from './flags/flags.component'

const routes: Routes = [
    { path: '', component: AppFlagsComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppFlagsRoutingModule { }
