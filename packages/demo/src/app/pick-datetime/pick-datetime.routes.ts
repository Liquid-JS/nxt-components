import { Routes } from '@angular/router'

export const pickDatetimeRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pick-datetime/pick-datetime.component').then(m => m.AppPickDatetimeComponent)
    },
    {
        path: 'getting-started',
        loadComponent: () => import('./getting-started/getting-started.component').then(m => m.GettingStartedComponent)
    },
    {
        path: 'accessibility',
        loadComponent: () => import('./accessibility/accessibility.component').then(m => m.AccessibilityComponent)
    },
    {
        path: 'validation',
        loadComponent: () => import('./validation/validation.component').then(m => m.ValidationComponent)
    },
    {
        path: 'custom-adapter',
        loadComponent: () => import('./custom-adapter/custom-adapter.component').then(m => m.CustomAdapterComponent)
    }
]
