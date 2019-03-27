import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core'

export type TextEvent = string | { v: number, rg: number }

@Directive({
    selector: '[cpText]'
})
export class TextDirective {
    @Input() rg: number
    @Input() text: any

    @Output() newValue = new EventEmitter<TextEvent>()

    @HostListener('input', ['$event']) inputChange(event: any): void {
        const value = event.target.value

        if (this.rg === undefined) {
            this.newValue.emit(value)
        } else {
            const numeric = parseFloat(value)

            this.newValue.emit({ v: numeric, rg: this.rg })
        }
    }
}
