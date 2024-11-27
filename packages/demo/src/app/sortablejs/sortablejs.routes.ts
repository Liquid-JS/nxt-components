import { Routes } from '@angular/router'

export const sortablejsRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./sortablejs/sortablejs.component').then(m => m.AppSortablejsComponent)
    },
    {
        path: 'getting-started',
        loadComponent: () => import('./getting-started/getting-started.component').then(m => m.GettingStartedComponent)
    }
]

