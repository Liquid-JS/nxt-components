import { InjectionToken, Provider } from '@angular/core'

/**
 * Where the flags' SVGs are: a base path, which the code and `.svg` follow, or a function from a code (e.g. `br`) to
 * its URL.
 */
export type FlagPath = string | ((code: string) => string)

/** Where the flags' SVGs are; `assets/flags/` by default, relative to the base href. */
export const NXT_FLAGS_PATH = new InjectionToken<FlagPath>('nxt-flags path', { factory: () => 'assets/flags/' })

/**
 * Sets where the flags' SVGs are, for the app or for the flags inside a component, e.g. another folder or a CDN.
 *
 * ```ts
 * providers: [provideFlagsPath('/static/flags/')]
 * providers: [provideFlagsPath((code) => `https://cdn.example.com/flags/${code}.svg`)]
 * ```
 */
export function provideFlagsPath(path: FlagPath): Provider {
    return { provide: NXT_FLAGS_PATH, useValue: path }
}
