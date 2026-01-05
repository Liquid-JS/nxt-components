import {
    Directive,
    input,
    output,
    signal
} from '@angular/core'
import type { AutoHighlightResult } from 'highlight.js'
import { HighlightBase } from './highlight-base.directive'

@Directive({
    selector: '[nxtHighlightAuto]',
    providers: [{ provide: HighlightBase, useExisting: HighlightAutoDirective }],
    host: {
        '[class.hljs]': 'true'
    }
})
export class HighlightAutoDirective extends HighlightBase {

    /**
     * Code to highlight
     */
    readonly code = input<string>(undefined, { alias: 'nxtHighlightAuto' })

    /**
     * Highlighted result
     */
    readonly highlightResult = signal<AutoHighlightResult | undefined>(undefined)

    /**
     * An optional array of language names and aliases restricting detection to only those languages
     *
     * The subset can also be set with configure, but the local parameter overrides the option if set.
     */
    readonly languages = input<string[]>()

    /**
     * Stream that emits when code string is highlighted
     */
    readonly highlighted = output<AutoHighlightResult>()

    protected highlightElement(code: string) {
        const hljs = this.hljs.hljs()
        return hljs?.highlightAuto(code, this.languages())
    }
}

