import {
    Directive,
    ElementRef,
    booleanAttribute,
    effect,
    inject,
    input,
    numberAttribute
} from '@angular/core'
import { HighlightBase, HighlightJS, NXT_HIGHLIGHT_OPTIONS } from 'nxt-highlightjs'

@Directive({
    selector: '[nxtHighlight][lineNumbers], [nxtHighlightAuto][lineNumbers]'
})
export class HighlightLineNumbersDirective {

    private readonly options = inject(NXT_HIGHLIGHT_OPTIONS)?.lineNumbersOptions
    private readonly hljs = inject(HighlightJS)
    private readonly highlight = inject(HighlightBase)
    private readonly nativeElement = inject(ElementRef<HTMLElement>).nativeElement

    readonly startFrom = input(this.options?.startFrom, {
        transform: numberAttribute
    })

    readonly singleLine = input(this.options?.singleLine, {
        transform: booleanAttribute
    })

    constructor() {
        effect(() => {
            const hljs = this.hljs.hljs()
            const result = this.highlight.highlightResult()
            if (result?.value) {
                if ((hljs as any).lineNumbersBlock) {
                    const code = (hljs as any).lineNumbersBlock(result.value, {
                        startFrom: this.startFrom(),
                        singleLine: this.singleLine()
                    })
                    this.nativeElement.innerHTML = code
                }
                // If lines count is 1, the line numbers library will not add numbers
                if (this.nativeElement.firstElementChild?.tagName.toUpperCase() === 'TABLE') {
                    this.nativeElement.classList.add('hljs-line-numbers')
                } else {
                    this.nativeElement.classList.remove('hljs-line-numbers')
                }
            }
        })
    }
}
