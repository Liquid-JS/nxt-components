import { InjectionToken, makeEnvironmentProviders } from '@angular/core'
import type { HLJSApi, HLJSOptions, LanguageFn } from 'highlight.js'

/**
 * Full documentation is available here https://highlightjs.readthedocs.io/en/latest/api.html
 */

export interface LineNumbersOptions {
    startFrom?: number
    singleLine?: boolean
}

export interface HighlightJSOptions {
    highlightOptions?: Partial<HLJSOptions>
    lineNumbersOptions?: LineNumbersOptions
    languages?: Record<string, () => Promise<LanguageFn>>
    coreLibraryLoader?: () => Promise<HLJSApi>
    fullLibraryLoader?: () => Promise<HLJSApi>
    lineNumbersLoader?: () => Promise<{ activateLineNumbers: (document: Document) => (code: string, options?: LineNumbersOptions) => string }>
    themePath?: string
}

export const NXT_HIGHLIGHT_OPTIONS = new InjectionToken<HighlightJSOptions>('NXT_HIGHLIGHT_OPTIONS')

export function provideHighlightOptions(options: HighlightJSOptions) {
    return makeEnvironmentProviders([
        {
            provide: NXT_HIGHLIGHT_OPTIONS,
            useValue: options
        }
    ])
}
