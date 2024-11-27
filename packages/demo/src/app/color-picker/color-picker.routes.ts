import { Routes } from '@angular/router'

export const colorPickerRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./color-picker/color-picker.component').then(m => m.AppColorPickerWrapComponent)
    },
    {
        path: 'getting-started', loadComponent: () => import('./getting-started/getting-started.component').then(m => m.GettingStartedComponent)
    }
]
