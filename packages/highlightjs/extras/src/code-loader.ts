import { HttpClient, HttpParams } from '@angular/common/http'
import { inject, Injectable, PendingTasks, Signal } from '@angular/core'
import { EMPTY, Observable, shareReplay } from 'rxjs'
import { rxResource, RxResourceOptions } from '@angular/core/rxjs-interop'
import { Gist, isUrl, NXT_GIST_OPTIONS } from './gist.model'
import { NXT_HIGHLIGHT_FILE_LOCATION } from './code-file-location'

/** @internal */
@Injectable({
    providedIn: 'root'
})
export class CodeLoader {

    readonly http = inject(HttpClient)
    readonly options = inject(NXT_GIST_OPTIONS, { optional: true })
    private readonly pendingTasks = inject(PendingTasks)

    /**
     * Get plus code
     *
     * @param id Gist ID
     * @deprecated Use gistResource
     */
    getCodeFromGist(id: string): Observable<Gist> {
        let params: HttpParams | undefined
        if (this.options?.clientId && this.options?.clientSecret) {
            params = new HttpParams().set('client_id', this.options.clientId).set('client_secret', this.options.clientSecret)
        }
        return this.fetchFile(`https://api.github.com/gists/${id}`, { params, responseType: 'json' })
    }

    /**
     * Get code by URL
     *
     * @param url File raw link
     * @deprecated Use fileResource
     */
    getCodeFromUrl(url: string): Observable<string> {
        return this.fetchFile(url, { responseType: 'text' })
    }

    fetchFile(url: string, options: any): Observable<any> {
        // Check if URL is valid
        if (isUrl(url)) {
            return this.http.get(url, options).pipe(
                obs => new Observable(sub => {
                    const done = this.pendingTasks.add()
                    const s = obs.subscribe({
                        next: val => {
                            sub.next(val)
                            done()
                        },
                        error: err => {
                            sub.error(err)
                            console.log(err)
                            done()
                        },
                        complete: () => sub.complete()
                    })
                    s.add(() => done())
                    return s
                }),
                // Catch response
                shareReplay(1)
            )
        }
        return EMPTY
    }

}

/**
 * Code resource by URL
 *
 * @param url File raw link
 */
export function fileResource(url: string | Signal<string>, _options: Omit<RxResourceOptions<string, string>, 'params' | 'stream'> & { formatUrl?: boolean } = {}) {
    const { formatUrl, ...options } = _options
    const cl = options?.injector ? options.injector.get(CodeLoader) : inject(CodeLoader)
    const location = options?.injector ? options.injector.get(NXT_HIGHLIGHT_FILE_LOCATION) : inject(NXT_HIGHLIGHT_FILE_LOCATION)

    return rxResource({
        ...options,
        params: () => {
            const fileUrl = typeof url == 'string' ? url : url()
            return isUrl(fileUrl) ? fileUrl : location.formatPathname(fileUrl)
        },
        stream: ({ params: fileUrl }) => cl.fetchFile(fileUrl, { responseType: 'text' })
    })
}

/**
 * Gist resource by id
 *
 * @param id Gist ID
 */
export function gistResource(id: string | Signal<string>, options?: Omit<RxResourceOptions<Gist, string>, 'params' | 'stream'>) {
    const cl = options?.injector ? options.injector.get(CodeLoader) : inject(CodeLoader)
    return rxResource({
        ...options,
        params: () => typeof id == 'string' ? id : id(),
        stream: ({ params: gistId }) => {
            let params: HttpParams | undefined
            if (cl.options?.clientId && cl.options?.clientSecret) {
                params = new HttpParams().set('client_id', cl.options.clientId).set('client_secret', cl.options.clientSecret)
            }
            return cl.fetchFile(`https://api.github.com/gists/${gistId}`, { params, responseType: 'json' })
        }
    })
}
