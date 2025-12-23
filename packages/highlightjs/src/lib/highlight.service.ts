import { Injectable, inject } from '@angular/core'
import type {
    AutoHighlightResult,
    HLJSApi,
    HighlightOptions,
    HighlightResult,
    LanguageFn
} from 'highlight.js'
import { LineNumbersOptions } from './highlight.model'
import { HighlightLoader } from './highlight.loader'

@Injectable({
    providedIn: 'root'
})
export class HighlightJS {

    private readonly loader = inject(HighlightLoader)

    readonly hljs = this.loader.hljs.value

    /**
     * Core highlighting function. Accepts the code to highlight (string) and a list of options (object)
     *
     * @deprecated use hljs().highlight
     */
    async highlight(code: string, options: HighlightOptions): Promise<HighlightResult> {
        const hljs: HLJSApi = await this.loader.ready
        return hljs.highlight(code, options)
    }

    /**
     * Highlighting with language detection.
     *
     * @deprecated use hljs().highlightAuto
     */
    async highlightAuto(value: string, languageSubset?: string[]): Promise<AutoHighlightResult> {
        const hljs: HLJSApi = await this.loader.ready
        return hljs.highlightAuto(value, languageSubset)
    }

    /**
     * Applies highlighting to a DOM node containing code.
     * This function is the one to use to apply highlighting dynamically after page load or within initialization code of third-party JavaScript frameworks.
     * The function uses language detection by default but you can specify the language in the class attribute of the DOM node. See the scopes reference for all available language names and scopes.
     *
     * @deprecated use hljs().highlightElement
     */
    async highlightElement(element: HTMLElement): Promise<void> {
        const hljs: HLJSApi = await this.loader.ready
        hljs.highlightElement(element)
    }

    /**
     * Applies highlighting to all elements on a page matching the configured cssSelector. The default cssSelector value is 'pre code',
     * which highlights all code blocks. This can be called before or after the page’s onload event has fired.
     *
     * @deprecated use hljs().highlightAll
     */
    async highlightAll(): Promise<void> {
        const hljs: HLJSApi = await this.loader.ready
        hljs.highlightAll()
    }

    /**
     * Adds new language to the library under the specified name. Used mostly internally.
     * The function is passed the hljs object to be able to use common regular expressions defined within it.
     *
     * @deprecated use hljs().registerLanguage
     */
    async registerLanguage(languageName: string, languageDefinition: LanguageFn): Promise<void> {
        const hljs: HLJSApi = await this.loader.ready
        hljs.registerLanguage(languageName, languageDefinition)
    }

    /**
     * Removes a language and its aliases from the library. Used mostly internally
     *
     * @deprecated use hljs().unregisterLanguage
     */
    async unregisterLanguage(languageName: string): Promise<void> {
        const hljs: HLJSApi = await this.loader.ready
        hljs.unregisterLanguage(languageName)
    }

    /**
     * Adds new language alias or aliases to the library for the specified language name defined under languageName key.
     *
     * @deprecated use hljs().registerAliases
     */
    async registerAliases(alias: string | string[], { languageName }: { languageName: string }): Promise<void> {
        const hljs: HLJSApi = await this.loader.ready
        hljs.registerAliases(alias, { languageName })
    }

    /**
     * @return The languages names list.
     * @deprecated use hljs().listLanguages
     */
    async listLanguages(): Promise<string[]> {
        const hljs: HLJSApi = await this.loader.ready
        return hljs.listLanguages()
    }

    /**
     * Looks up a language by name or alias.
     *
     * @deprecated use hljs().getLanguage
     */
    async getLanguage(name: string): Promise<any> {
        const hljs: HLJSApi = await this.loader.ready
        return hljs.getLanguage(name)
    }

    /**
     * Enables safe mode. This is the default mode, providing the most reliable experience for production usage.
     *
     * @deprecated use hljs().safeMode
     */
    async safeMode(): Promise<void> {
        const hljs: HLJSApi = await this.loader.ready
        hljs.safeMode()
    }

    /**
     * Enables debug/development mode.
     *
     * @deprecated use hljs().debugMode
     */
    async debugMode(): Promise<void> {
        const hljs: HLJSApi = await this.loader.ready
        hljs.debugMode()
    }

    /**
     * Display line numbers
     *
     * @deprecated use hljs().lineNumbersBlock
     */
    async lineNumbersBlock(code: string, options: LineNumbersOptions): Promise<void> {
        const hljs: HLJSApi = await this.loader.ready;
        (hljs as any).lineNumbersBlock(code, options)
    }
}
