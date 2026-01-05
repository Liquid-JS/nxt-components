import {
    booleanAttribute,
    Directive,
    input,
    output,
    signal
} from '@angular/core'
import type { HighlightResult } from 'highlight.js'
import { HighlightBase } from './highlight-base.directive'

@Directive({
    selector: '[nxtHighlight]',
    providers: [{ provide: HighlightBase, useExisting: HighlightDirective }],
    host: {
        '[class.hljs]': 'true'
    }
})
export class HighlightDirective extends HighlightBase {

    /**
     * Code to highlight
     */
    readonly code = input<string>(undefined, { alias: 'nxtHighlight' })

    /**
     * Highlighted result
     */
    readonly highlightResult = signal<HighlightResult | undefined>(undefined)

    /**
     * The language name highlight only one language
     */
    readonly language = input.required<string>()

    /**
     * An optional flag, when set to true it forces highlighting to finish even in case of detecting
     * illegal syntax for the language instead of throwing an exception
     */
    readonly ignoreIllegals = input<boolean, unknown>(undefined, {
        transform: booleanAttribute
    })

    /**
     * Stream that emits when code string is highlighted
     */
    readonly highlighted = output<HighlightResult>()

    highlightElement(code: string) {
        const hljs = this.hljs.hljs()
        return hljs?.highlight(code, {
            language: this.language(),
            ignoreIllegals: this.ignoreIllegals()
        })
    }
}
