import { Directive, ElementRef, HostListener, input, output } from '@angular/core'
import { CursorEvent } from '../util/helpers'

/**
 * @internal
 */
@Directive({
    selector: '[nxtSlider]'
})
export class SliderDirective {

    private isMoving = false

    readonly rgX = input<number>()
    readonly rgY = input<number>()

    readonly slider = input<string>(undefined, { alias: 'nxtSlider' })

    readonly dragEnd = output()
    readonly dragStart = output()

    readonly newValue = output<CursorEvent>()

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

        const rgX = this.rgX()
        const rgY = this.rgY()
        if (rgX != undefined && rgY != undefined) {
            this.newValue.emit({ s: x / width, v: (1 - y / height), rgX, rgY })
        } else if (rgX == undefined && rgY != undefined) {
            this.newValue.emit({ v: y / height, rgY })
        } else if (rgX != undefined && rgY == undefined) {
            this.newValue.emit({ v: x / width, rgX })
        }
    }
}
