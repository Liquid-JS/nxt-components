import { Routes } from '@angular/router'

export const highlightjsRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./highlightjs/highlightjs.component').then(({ AppHighlightjsComponent }) => AppHighlightjsComponent)
    },
    {
        path: 'getting-started',
        loadComponent: () => import('./getting-started/getting-started.component').then(({ GettingStartedComponent }) => GettingStartedComponent)
    },
    {
        path: 'extras',
        loadComponent: () => import('./extras/extras.component').then(({ ExtrasComponent }) => ExtrasComponent)
    }
]
