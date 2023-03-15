import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppDropzoneWrapperComponent } from './dropzone-wrapper/dropzone-wrapper.component'
import { GettingStartedComponent } from './getting-started/getting-started.component'

const routes: Routes = [
    { path: '', pathMatch: 'full', component: AppDropzoneWrapperComponent },
    { path: 'getting-started', component: GettingStartedComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppDropzoneWrapperRoutingModule { }
