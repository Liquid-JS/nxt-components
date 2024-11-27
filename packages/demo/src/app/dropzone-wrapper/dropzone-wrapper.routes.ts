import { Routes } from '@angular/router'

export const dropzoneWrapperRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./dropzone-wrapper/dropzone-wrapper.component').then(m => m.AppDropzoneWrapperComponent)
    },
    {
        path: 'getting-started',
        loadComponent: () => import('./getting-started/getting-started.component').then(m => m.GettingStartedComponent)
    }
]
