import { Injectable, resource } from '@angular/core'
import hljs, { type HLJSApi } from 'highlight.js'
import { activateLineNumbers } from 'nxt-highlightjs/line-numbers'

export async function afterTimeout(timeout: number): Promise<void> {
    // Use await with a setTimeout promise
    await new Promise<void>((resolve) => setTimeout(resolve, timeout))
}

@Injectable({ providedIn: 'root' })
export class HighlightLoaderStub {

    ready = new Promise<HLJSApi>((resolve) => {
        (hljs as any).lineNumbersBlock = activateLineNumbers(document)
        resolve(hljs)
    })

    readonly hljs = resource({
        loader: () => this.ready
    }).asReadonly()
}
