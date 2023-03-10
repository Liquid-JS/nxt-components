import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppDropzoneWrapperComponent } from './dropzone-wrapper/dropzone-wrapper.component'

const routes: Routes = [
    { path: '', component: AppDropzoneWrapperComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppDropzoneWrapperRoutingModule { }
