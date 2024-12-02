import { ApplicationConfig, isDevMode } from '@angular/core'
import { provideClientHydration } from '@angular/platform-browser'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideRouter, withInMemoryScrolling } from '@angular/router'
import { provideServiceWorker } from '@angular/service-worker'
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { provideHighlightOptions } from 'ngx-highlightjs'
import { DropzoneConfig, NXT_DROPZONE_CONFIG } from 'nxt-dropzone-wrapper'
import { provideNativeDateTimeAdapter } from 'packages/pick-datetime/native-adapter/src/native-adapter.module'
import { routes } from './app.routes'

const DEFAULT_DROPZONE_CONFIG: DropzoneConfig = {
    // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    acceptedFiles: 'image/*',
    createImageThumbnails: true
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes, withInMemoryScrolling({
            anchorScrolling: 'enabled',
            scrollPositionRestoration: 'enabled'
        })),
        provideAnimations(),
        provideClientHydration(),
        provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
        }),
        provideHighlightOptions({
            coreLibraryLoader: () => import('highlight.js/lib/core'),
            lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
            languages: {
                typescript: () => import('highlight.js/lib/languages/typescript'),
                scss: () => import('highlight.js/lib/languages/scss'),
                xml: () => import('highlight.js/lib/languages/xml'),
                bash: () => import('highlight.js/lib/languages/bash'),
                shell: () => import('highlight.js/lib/languages/shell'),
                json: () => import('highlight.js/lib/languages/json')
            }
        }),
        {
            provide: NXT_DROPZONE_CONFIG,
            useValue: DEFAULT_DROPZONE_CONFIG
        },
        ...TooltipModule.forRoot().providers || [],
        provideNativeDateTimeAdapter()
    ]
}
