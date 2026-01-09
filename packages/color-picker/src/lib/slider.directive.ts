import { Directive, ElementRef, inject, input, output } from '@angular/core'
import { CursorEvent } from '../util/helpers'

/**
 * @internal
 */
@Directive({
    selector: '[nxtSlider]',
    host: {
        '(mousedown)': 'onStart($event)',
        '(touchstart)': 'onStart($event)',
        '(document:mousemove)': 'onMove($event)',
        '(document:touchmove)': 'onMove($event)',
        '(document:mouseup)': 'onStop($event)',
        '(document:touchend)': 'onStop($event)'
    }
})
export class SliderDirective {

    private isMoving = false

    readonly rgX = input<number>()
    readonly rgY = input<number>()

    readonly slider = input<string>(undefined, { alias: 'nxtSlider' })

    readonly dragEnd = output()
    readonly dragStart = output()

    readonly newValue = output<CursorEvent>()
    private readonly elRef = inject(ElementRef)

    onStart(event: MouseEvent | TouchEvent) {
        event.stopPropagation()
        event.preventDefault()

        this.setCursor(event)
        this.isMoving = true
        this.dragStart.emit(undefined)
    }

    onMove(event: MouseEvent | TouchEvent) {
        if (this.isMoving) {
            event.stopPropagation()
            event.preventDefault()

            this.setCursor(event)
        }
    }

    onStop(event: MouseEvent | TouchEvent) {
        if (this.isMoving) {
            event.stopPropagation()
            event.preventDefault()

            this.isMoving = false
            this.dragEnd.emit(undefined)
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
