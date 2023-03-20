import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppFlagsComponent } from './flags/flags.component'
import { GettingStartedComponent } from './getting-started/getting-started.component'

const routes: Routes = [
    { path: '', pathMatch: 'full', component: AppFlagsComponent },
    { path: 'getting-started', component: GettingStartedComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppFlagsRoutingModule { }
