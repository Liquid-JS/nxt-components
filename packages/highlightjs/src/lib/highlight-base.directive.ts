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
    abstract readonly code: InputSignal<string | null | undefined>

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
            if (code) {
                const res = this.highlightElement(code)
                if (res) {
                    this.setInnerHTML(res?.value ?? undefined)
                    this.highlightResult.set(res)
                    // Forward highlight response to the highlighted output
                    this.highlighted.emit(res)
                }
            } else {
                this.setTextContent('')
            }
        })
    }

    protected abstract highlightElement(code: string): HighlightResult | AutoHighlightResult | undefined

    private setTextContent(content: string): void {
        this.nativeElement.textContent = content
    }

    private setInnerHTML(content: string | undefined): void {
        this.nativeElement.innerHTML = trustedHTMLFromStringBypass(
            this.sanitizer.sanitize(SecurityContext.HTML, content || null) || ''
        ) as any
    }
}
