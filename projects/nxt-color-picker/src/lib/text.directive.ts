import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core'
import { TextEvent } from '../util/helpers'

@Directive({
    selector: '[cpText]'
})
export class TextDirective {

    @Input() rg: number
    @Input() text: any

    @Output() newValue = new EventEmitter<TextEvent>()

    @HostListener('input', ['$event'])
    @HostListener('change', ['$event'])
    inputChange(event: Event) {
        const value = ((event && event.target && event.target['value'] || '') + '').trim()

        if (this.rg == undefined) {
            this.newValue.emit(value)
        } else {
            const numeric = parseFloat(value)
            this.newValue.emit({ v: numeric, rg: this.rg })
        }
    }
}
