import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppJsonViewComponent } from './json-view.component'

const routes: Routes = [
    { path: '', component: AppJsonViewComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppJsonViewRoutingModule { }
