import { Routes } from '@angular/router'

export const sitemapRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./sitemap/sitemap.component').then(m => m.AppSitemapComponent)
    }
]

