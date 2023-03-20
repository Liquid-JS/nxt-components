import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { GettingStartedComponent } from './getting-started/getting-started.component'
import { AppSortablejsComponent } from './sortablejs/sortablejs.component'

const routes: Routes = [
    { path: '', pathMatch: 'full', component: AppSortablejsComponent },
    { path: 'getting-started', component: GettingStartedComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppSortablejsRouterModule { }
