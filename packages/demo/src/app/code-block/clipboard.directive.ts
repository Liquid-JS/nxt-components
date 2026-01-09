import { Directive, input, output } from '@angular/core'
import * as clipboard from 'clipboard-polyfill'

@Directive({
    selector: '[appClipboard]',
    exportAs: 'appClipboard',
    standalone: true,
    host: {
        '(click)': 'onClick($event)'
    }
})
export class ClipboardDirective {

    readonly target = input<HTMLElement>()

    readonly text = input<string>()

    readonly clipboardSuccess = output<void>()

    readonly clipboardError = output<Error>()

    onClick(event?: MouseEvent) {
        if (event) {
            event.preventDefault?.()
            event.stopPropagation?.()
        }
        Promise.resolve()
            .then(() => {
                const data: {
                    [type: string]: clipboard.ClipboardItemDataType
                } = {}

                const targetValue = this.target()
                const text = this.text()
                if (targetValue) {
                    data['text/plain'] = targetValue.innerText
                    data['text/html'] = targetValue.innerHTML
                } else if (text)
                    data['text/plain'] = text
                else if (event) {
                    const target = event.target as HTMLElement
                    data['text/plain'] = target?.innerText
                    data['text/html'] = target?.innerHTML
                } else
                    // No data to set
                    return

                return clipboard.write([new clipboard.ClipboardItem(data)])
            })
            .then(() => this.clipboardSuccess.emit(undefined))
            .catch(err => this.clipboardError.emit(err))
    }

}
