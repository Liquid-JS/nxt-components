import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {
        path: 'dropzone-wrapper',
        loadChildren: () => import('./dropzone-wrapper/dropzone-wrapper.module').then(m => m.AppDropzoneWrapperModule)
    },
    {
        path: 'flags',
        loadChildren: () => import('./flags/flags.module').then(m => m.AppFlagsModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
