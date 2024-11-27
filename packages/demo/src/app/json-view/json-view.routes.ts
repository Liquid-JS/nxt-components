import { Routes } from '@angular/router'

export const jsonViewRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./json-view/json-view.component').then(m => m.AppJsonViewComponent)
    },
    {
        path: 'getting-started',
        loadComponent: () => import('./getting-started/getting-started.component').then(m => m.GettingStartedComponent)
    }
]
