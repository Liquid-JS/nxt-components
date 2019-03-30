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
    inputChange(event: Event) {
        if (event && event.target && event.target.hasOwnProperty('value')) {
            const input = event.target as HTMLInputElement

            if (this.rg === undefined) {
                this.newValue.emit(input.value)
            } else {
                const numeric = parseFloat(input.value)

                this.newValue.emit({ v: numeric, rg: this.rg })
            }
        }
    }
}
