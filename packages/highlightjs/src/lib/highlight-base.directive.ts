import {
    Directive,
    ElementRef,
    InputSignal,
    OutputEmitterRef,
    SecurityContext,
    WritableSignal,
    effect,
    inject
} from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import type { AutoHighlightResult, HighlightResult } from 'highlight.js'
import { HighlightJS } from './highlight.service'
import { trustedHTMLFromStringBypass } from './trusted-types'

@Directive()
export abstract class HighlightBase {

    protected readonly hljs: HighlightJS = inject(HighlightJS)

    private readonly nativeElement: HTMLElement = inject(ElementRef<HTMLElement>).nativeElement
    private readonly sanitizer: DomSanitizer = inject(DomSanitizer)

    /**
     * Code to highlight
     */
    abstract readonly code: InputSignal<string | undefined>

    /**
     * Highlighted result
     */
    abstract readonly highlightResult: WritableSignal<HighlightResult | AutoHighlightResult | undefined>

    /**
     * Stream that emits when code string is highlighted
     */
    abstract readonly highlighted: OutputEmitterRef<HighlightResult | AutoHighlightResult | undefined>

    constructor() {
        effect(() => {
            const code = this.code()
            if (!code) {
                this.setTextContent('')
                return
            }
            if (!this.hljs.hljs()) {
                // Until Highlight.js loads, the code shows as text; code that's already there, e.g. highlighted on the
                // server, stays as it is, so a hydrated page keeps its highlighting.
                if (this.nativeElement.textContent !== code) {
                    this.setTextContent(code)
                }
                return
            }
            const res = this.highlightElement(code)
            if (res) {
                this.setInnerHTML(res.value)
                this.highlightResult.set(res)
                // Forward highlight response to the highlighted output
                this.highlighted.emit(res)
            } else {
                // A language Highlight.js doesn't know shows as text
                this.setTextContent(code)
                this.highlightResult.set(undefined)
            }
        })
    }

    /**
     * Highlights the code with the loaded Highlight.js, or returns `undefined` to show it as text
     */
    protected abstract highlightElement(code: string): HighlightResult | AutoHighlightResult | undefined

    private setTextContent(content: string): void {
        this.nativeElement.textContent = content
    }

    private setInnerHTML(content?: string): void {
        this.nativeElement.innerHTML = trustedHTMLFromStringBypass(
            this.sanitizer.sanitize(SecurityContext.HTML, content || null) || ''
        ) as any
    }
}
