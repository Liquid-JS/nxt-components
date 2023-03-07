import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core'
import { CursorEvent } from '../util/helpers'

@Directive({
    selector: '[nxtSlider]'
})
export class SliderDirective {

    private isMoving = false

    @Input() rgX?: number
    @Input() rgY?: number

    @Input('nxtSlider') slider?: string

    @Output() dragEnd = new EventEmitter()
    @Output() dragStart = new EventEmitter()

    @Output() newValue = new EventEmitter<CursorEvent>()

    constructor(
        private elRef: ElementRef
    ) { }

    @HostListener('mousedown', ['$event'])
    @HostListener('touchstart', ['$event'])
    onStart(event: MouseEvent | TouchEvent) {
        event.stopPropagation()
        event.preventDefault()

        this.setCursor(event)
        this.isMoving = true
        this.dragStart.emit()
    }

    @HostListener('document:mousemove', ['$event'])
    @HostListener('document:touchmove', ['$event'])
    onMove(event: MouseEvent | TouchEvent) {
        if (this.isMoving) {
            event.stopPropagation()
            event.preventDefault()

            this.setCursor(event)
        }
    }

    @HostListener('document:mouseup', ['$event'])
    @HostListener('document:touchend', ['$event'])
    onStop(event: MouseEvent | TouchEvent) {
        if (this.isMoving) {
            event.stopPropagation()
            event.preventDefault()

            this.isMoving = false
            this.dragEnd.emit()
        }
    }

    private getX(event: MouseEvent | TouchEvent) {
        const position = this.elRef.nativeElement.getBoundingClientRect()

        const pageX = 'pageX' in event ? event.pageX : event.touches[0].pageX

        return pageX - position.left - window.scrollX
    }

    private getY(event: MouseEvent | TouchEvent) {
        const position = this.elRef.nativeElement.getBoundingClientRect()

        const pageY = 'pageX' in event ? event.pageY : event.touches[0].pageY

        return pageY - position.top - window.scrollY
    }

    private setCursor(event: MouseEvent | TouchEvent) {
        const width = this.elRef.nativeElement.offsetWidth
        const height = this.elRef.nativeElement.offsetHeight

        const x = Math.max(0, Math.min(this.getX(event), width))
        const y = Math.max(0, Math.min(this.getY(event), height))

        if (this.rgX != undefined && this.rgY != undefined) {
            this.newValue.emit({ s: x / width, v: (1 - y / height), rgX: this.rgX, rgY: this.rgY })
        } else if (this.rgX == undefined && this.rgY != undefined) {
            this.newValue.emit({ v: y / height, rgY: this.rgY })
        } else if (this.rgX != undefined && this.rgY == undefined) {
            this.newValue.emit({ v: x / width, rgX: this.rgX })
        }
    }
}
