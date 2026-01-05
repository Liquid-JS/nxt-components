import { join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { readFile } from 'fs/promises'
import { Injectable, isDevMode, provideZoneChangeDetection } from '@angular/core'
import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser'
import { CodeLoader, NXT_HIGHLIGHT_FILE_LOCATION } from 'nxt-highlightjs/extras'
import { from, Observable } from 'rxjs'
import { AppComponent } from './app/app.component'
import { config } from './app/app.config.server'

@Injectable()
class SSRCodeLoader extends CodeLoader {
    override fetchFile(url: string, options: any): Observable<any> {
        if (url.startsWith('file://')) {
            return from(readFile(fileURLToPath(url), 'utf8'))
        } else {
            return super.fetchFile(url, options)
        }
    }
}

const bootstrap = (context: BootstrapContext) => bootstrapApplication(AppComponent, {
    ...config,
    providers: [
        provideZoneChangeDetection(),
        ...config.providers,
        {
            provide: NXT_HIGHLIGHT_FILE_LOCATION,
            useValue: {
                formatPathname: (path: string) => {
                    let url: URL
                    if (isDevMode()) {
                        url = new URL(path, 'http://localhost:4200/')
                    } else {
                        url = pathToFileURL(join(process.cwd(), '../../dist/demo/browser', path))
                    }
                    return url.toString()
                }
            }
        },
        {
            provide: CodeLoader,
            useClass: SSRCodeLoader
        }
    ]
}, context)

export default bootstrap
