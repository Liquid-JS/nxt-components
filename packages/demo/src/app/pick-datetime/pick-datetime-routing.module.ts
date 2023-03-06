import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppPickDatetimeComponent } from './pick-datetime.component'

const routes: Routes = [
    { path: '', component: AppPickDatetimeComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppPickDatetimeRoutingModule { }
