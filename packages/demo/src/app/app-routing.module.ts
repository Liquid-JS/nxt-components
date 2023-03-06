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
    },
    {
        path: 'json-view',
        loadChildren: () => import('./json-view/json-view.module').then(m => m.AppJsonViewModule)
    },
    {
        path: 'pick-datetime',
        loadChildren: () => import('./pick-datetime/pick-datetime.module').then(m => m.AppPickDatetimeModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
