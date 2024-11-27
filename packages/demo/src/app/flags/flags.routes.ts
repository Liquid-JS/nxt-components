import { Routes } from '@angular/router'

export const flagsRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./flags/flags.component').then(({ AppFlagsComponent }) => AppFlagsComponent)
    },
    {
        path: 'getting-started',
        loadComponent: () => import('./getting-started/getting-started.component').then(({ GettingStartedComponent }) => GettingStartedComponent)
    }
]
