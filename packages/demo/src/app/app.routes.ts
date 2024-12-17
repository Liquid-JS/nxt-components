import { Routes } from '@angular/router'
import { colorPickerRoutes } from './color-picker/color-picker.routes'
import { dropzoneWrapperRoutes } from './dropzone-wrapper/dropzone-wrapper.routes'
import { flagsRoutes } from './flags/flags.routes'
import { jsonViewRoutes } from './json-view/json-view.routes'
import { pickDatetimeRoutes } from './pick-datetime/pick-datetime.routes'
import { sortablejsRoutes } from './sortablejs/sortablejs.routes'
import { sitemapRoutes } from './sitemap/sitemap.routes'

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'color-picker',
        children: colorPickerRoutes
    },
    {
        path: 'dropzone-wrapper',
        children: dropzoneWrapperRoutes
    },
    {
        path: 'flags',
        children: flagsRoutes
    },
    {
        path: 'json-view',
        children: jsonViewRoutes
    },
    {
        path: 'pick-datetime',
        children: pickDatetimeRoutes
    },
    {
        path: 'sitemap',
        children: sitemapRoutes
    },
    {
        path: 'sortablejs',
        children: sortablejsRoutes
    },
    {
        path: '*',
        redirectTo: ''
    }
]
