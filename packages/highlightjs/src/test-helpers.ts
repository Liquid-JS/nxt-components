import hljs, { type HLJSApi } from 'highlight.js'
import { activateLineNumbers } from 'nxt-highlightjs/line-numbers'

export async function afterTimeout(timeout: number): Promise<void> {
    // Use await with a setTimeout promise
    await new Promise<void>((resolve) => setTimeout(resolve, timeout))
}

// Fake Highlight Loader
export const highlightLoaderStub = {
    ready: new Promise<HLJSApi>((resolve) => {
        (hljs as any).lineNumbersBlock = activateLineNumbers(document)
        resolve(hljs)
    })
}
