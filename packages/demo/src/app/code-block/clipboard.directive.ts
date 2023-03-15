import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core'
import * as clipboard from 'clipboard-polyfill'

@Directive({
    selector: '[appClipboard]',
    exportAs: 'appClipboard',
    standalone: true
})
export class ClipboardDirective {

    @Input() target?: HTMLElement

    @Input() text?: string

    @Output() clipboardSuccess = new EventEmitter<void>()

    @Output() clipboardError = new EventEmitter<Error>()

    constructor(
        protected elementRef: ElementRef
    ) { }

    @HostListener('click', ['$event'])
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

                if (this.target) {
                    data['text/plain'] = this.target.innerText
                    data['text/html'] = this.target.innerHTML
                } else if (this.text)
                    data['text/plain'] = this.text
                else if (event) {
                    const target = event.target as HTMLElement
                    data['text/plain'] = target?.innerText
                    data['text/html'] = target?.innerHTML
                } else
                    // No data to set
                    return

                return clipboard.write([new clipboard.ClipboardItem(data)])
            })
            .then(() => this.clipboardSuccess.emit())
            .catch(err => this.clipboardError.emit(err))
    }

}
