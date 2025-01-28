import { DOCUMENT } from '@angular/common'
import { Injectable, PendingTasks, inject } from '@angular/core'
import type { HLJSApi } from 'highlight.js'
import { NXT_HIGHLIGHT_OPTIONS } from './highlight.model'
import { LoaderErrors } from './loader-errors'

@Injectable({
    providedIn: 'root'
})
export class HighlightLoader {

    private document: Document = inject(DOCUMENT)
    private options = inject(NXT_HIGHLIGHT_OPTIONS, { optional: true })
    private pendingTasks = inject(PendingTasks)

    readonly ready: Promise<HLJSApi> = this.pendingTasks.run(() => this._loadLibrary()
        .then(async hljs => {
            if (this.options?.lineNumbersLoader) {
                const plugin = await this.options.lineNumbersLoader();
                (hljs as any).lineNumbersBlock = plugin.activateLineNumbers(this.document)
            }

            if (this.options?.highlightOptions)
                hljs.configure(this.options.highlightOptions)

            return hljs
        })
    )

    private _themeLinkElement?: HTMLLinkElement

    constructor() {
        if (this.options?.themePath) {
            this.loadTheme(this.options.themePath)
        }
    }

    /**
     * Lazy-Load highlight.js library
     */
    private async _loadLibrary(): Promise<HLJSApi> {
        if (this.options) {
            if (this.options.fullLibraryLoader && this.options.coreLibraryLoader) {
                throw new Error(LoaderErrors.FULL_WITH_CORE_LIBRARY_IMPORTS)
            }
            if (this.options.fullLibraryLoader && this.options.languages) {
                throw new Error(LoaderErrors.FULL_WITH_LANGUAGE_IMPORTS)
            }
            if (this.options.coreLibraryLoader && !this.options.languages) {
                throw new Error(LoaderErrors.CORE_WITHOUT_LANGUAGE_IMPORTS)
            }
            if (!this.options.coreLibraryLoader && this.options.languages) {
                throw new Error(LoaderErrors.LANGUAGE_WITHOUT_CORE_IMPORTS)
            }
            if (this.options.fullLibraryLoader) {
                return this.options.fullLibraryLoader()
            }
            if (this.options.coreLibraryLoader && this.options.languages && Object.keys(this.options.languages).length) {
                return this.options.coreLibraryLoader().then(hljs => this._loadLanguages(hljs))
            }
        }
        throw new Error(LoaderErrors.NO_FULL_AND_NO_CORE_IMPORTS)
    }

    /**
     * Lazy-load highlight.js languages
     */
    private async _loadLanguages(hljs: HLJSApi) {
        await Promise.all(Object.entries(this.options?.languages || {})
            .map(([langName, langLoader]) => langLoader().then(langFunc => hljs.registerLanguage(langName, langFunc))))
        return hljs
    }

    /**
     * Reload theme styles
     */
    setTheme(path: string): void {
        if (this._themeLinkElement) {
            this._themeLinkElement.href = path
        } else {
            this.loadTheme(path)
        }
    }

    /**
     * Load theme
     */
    private loadTheme(path: string): void {
        this._themeLinkElement = this.document.createElement('link')
        this._themeLinkElement.href = path
        this._themeLinkElement.type = 'text/css'
        this._themeLinkElement.rel = 'stylesheet'
        this._themeLinkElement.media = 'screen,print'
        this.document.head.appendChild(this._themeLinkElement)
    }
}
