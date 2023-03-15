import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { GettingStartedComponent } from './getting-started/getting-started.component'
import { AppJsonViewComponent } from './json-view/json-view.component'

const routes: Routes = [
    { path: '', pathMatch: 'full', component: AppJsonViewComponent },
    { path: 'getting-started', component: GettingStartedComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppJsonViewRoutingModule { }
