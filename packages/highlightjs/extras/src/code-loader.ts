import { HttpClient, HttpParams } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { EMPTY, Observable, shareReplay } from 'rxjs'
import { Gist, isUrl, NXT_GIST_OPTIONS } from './gist.model'

@Injectable({
    providedIn: 'root'
})
export class CodeLoader {

    private readonly http = inject(HttpClient)
    private readonly options = inject(NXT_GIST_OPTIONS, { optional: true })

    /**
     * Get plus code
     *
     * @param id Gist ID
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
     */
    getCodeFromUrl(url: string): Observable<string> {
        return this.fetchFile(url, { responseType: 'text' })
    }

    private fetchFile(url: string, options: any): Observable<any> {
        // Check if URL is valid
        if (isUrl(url)) {
            return this.http.get(url, options).pipe(
                // Catch response
                shareReplay(1)
            )
        }
        return EMPTY
    }

}
