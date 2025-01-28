import { APP_BASE_HREF, DOCUMENT } from '@angular/common'
import { inject, InjectionToken } from '@angular/core'

/**
 * Injection token used to provide the current location to `codeFromUrl` pipe.
 * Used to handle server-side rendering and to stub out during unit tests.
 */
export const NXT_HIGHLIGHT_FILE_LOCATION = new InjectionToken<CodeFileLocation>('NXT_HIGHLIGHT_FILE_LOCATION', {
    providedIn: 'root',
    factory: CODE_FILE_LOCATION_FACTORY
})

export interface CodeFileLocation {
    getPathname: () => string
}

export function CODE_FILE_LOCATION_FACTORY() {
    const location = inject(DOCUMENT)?.location
    const base = inject(APP_BASE_HREF, { optional: true })

    return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        // getPathname: () => (location ? location.pathname + location.search : ''),
        getPathname: () => (base ?? (location ? location.origin : ''))
    }
}
