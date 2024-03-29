import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'color-picker',
        loadChildren: () => import('./color-picker/color-picker.module').then(m => m.AppColorPickerModule)
    },
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
    },
    {
        path: 'sortablejs',
        loadChildren: () => import('./sortablejs/sortablejs.module').then(m => m.AppSortablejsModule)
    },
    {
        path: '*',
        redirectTo: ''
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled',
        scrollOffset: () => {
            const header = document.querySelector('header.navbar')
            return [0, (header?.clientHeight || 1) - 1]
        }
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
