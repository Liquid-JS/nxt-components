import { ApplicationConfig, isDevMode } from '@angular/core'
import { provideClientHydration } from '@angular/platform-browser'
import { provideAnimations } from '@angular/platform-browser/animations'
import { DefaultUrlSerializer, provideRouter, UrlSerializer, UrlTree, withInMemoryScrolling } from '@angular/router'
import { provideServiceWorker } from '@angular/service-worker'
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { provideHighlightOptions } from 'nxt-highlightjs'
import { DropzoneConfig, NXT_DROPZONE_CONFIG } from 'nxt-dropzone-wrapper'
import { provideNativeDateTimeAdapter } from 'packages/pick-datetime/native-adapter/src/native-adapter.module'
import { routes } from './app.routes'

export class TrailingSlashUrlSerializer extends DefaultUrlSerializer {
    override serialize(tree: UrlTree): string {
        return this._withTrailingSlash(super.serialize(tree))
    }

    private _withTrailingSlash(url: string): string {
        const splitOn = url.indexOf('?') > -1 ? '?' : '#'
        const pathArr = url.split(splitOn)

        if (!pathArr[0].endsWith('/')) {
            const fileName: string = url.substring(url.lastIndexOf('/') + 1)
            if (fileName.indexOf('.') === -1) {
                pathArr[0] += '/'
            }
        }
        return pathArr.join(splitOn)
    }
}

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
        {
            provide: UrlSerializer,
            useClass: TrailingSlashUrlSerializer
        },
        provideAnimations(),
        provideClientHydration(),
        provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
        }),
        provideHighlightOptions({
            coreLibraryLoader: () => import('highlight.js/lib/core').then(r => r.default),
            lineNumbersLoader: () => import('nxt-highlightjs/line-numbers'),
            languages: {
                typescript: () => import('highlight.js/lib/languages/typescript').then(r => r.default),
                scss: () => import('highlight.js/lib/languages/scss').then(r => r.default),
                xml: () => import('highlight.js/lib/languages/xml').then(r => r.default),
                bash: () => import('highlight.js/lib/languages/bash').then(r => r.default),
                shell: () => import('highlight.js/lib/languages/shell').then(r => r.default),
                json: () => import('highlight.js/lib/languages/json').then(r => r.default)
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

