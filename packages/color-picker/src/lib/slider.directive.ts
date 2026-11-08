import { computed, Directive, ElementRef, inject, input, output } from '@angular/core'
import { CursorEvent } from '../util/helpers'

/**
 * @internal
 */
@Directive({
    selector: '[nxtSlider]',
    host: {
        'role': 'slider',
        'tabindex': '0',
        'aria-valuemin': '0',
        'aria-valuemax': '100',
        '[attr.aria-valuenow]': 'valueNow()',
        '[attr.aria-valuetext]': 'valueText()',
        '[attr.aria-label]': 'label()',
        '(keydown)': 'onKeydown($event)',
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

    readonly positionX = input<number>()
    readonly positionY = input<number>()
    readonly label = input<string>()
    readonly valueText = input<string>()

    readonly valueNow = computed(() => {
        const position = this.rgX() != undefined ? this.positionX() : this.positionY()
        return position == undefined ? undefined : Math.round(position * 100)
    })

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

    onKeydown(event: KeyboardEvent) {
        const twoDimensional = this.rgX() != undefined && this.rgY() != undefined
        const horizontal = this.rgX() != undefined
        let x = this.positionX() ?? 0
        let y = this.positionY() ?? 0
        const step = event.shiftKey ? 0.1 : 0.01

        switch (event.key) {
            case 'ArrowLeft':
                x -= step
                break
            case 'ArrowRight':
                x += step
                break
            case 'ArrowUp':
                if (twoDimensional) {
                    y -= step
                } else if (horizontal) {
                    x += step
                } else {
                    y -= step
                }
                break
            case 'ArrowDown':
                if (twoDimensional) {
                    y += step
                } else if (horizontal) {
                    x -= step
                } else {
                    y += step
                }
                break
            case 'PageUp':
                if (horizontal && !twoDimensional) x += 0.1
                else y -= 0.1
                break
            case 'PageDown':
                if (horizontal && !twoDimensional) x -= 0.1
                else y += 0.1
                break
            case 'Home':
                x = 0
                if (!horizontal) y = 0
                break
            case 'End':
                x = 1
                if (!horizontal) y = 1
                break
            default:
                return
        }

        event.preventDefault()
        event.stopPropagation()
        this.emitPosition(Math.max(0, Math.min(x, 1)), Math.max(0, Math.min(y, 1)))
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

        this.emitPosition(x / width, y / height)
    }

    private emitPosition(x: number, y: number) {
        const rgX = this.rgX()
        const rgY = this.rgY()
        if (rgX != undefined && rgY != undefined) {
            this.newValue.emit({ s: x, v: 1 - y, rgX, rgY })
        } else if (rgX == undefined && rgY != undefined) {
            this.newValue.emit({ v: y, rgY })
        } else if (rgX != undefined && rgY == undefined) {
            this.newValue.emit({ v: x, rgX })
        }
    }
}
