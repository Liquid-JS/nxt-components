import { ElementRef } from '@angular/core'
import { SliderDirective } from './slider.directive'

describe('SliderDirective', () => {
    let targetEl: HTMLDivElement

    let directive: SliderDirective

    beforeEach(() => {
        targetEl = document.createElement('div')
        directive = new SliderDirective(new ElementRef(targetEl))
    })

    afterEach(() => {
        if (targetEl) {
            targetEl.remove()
        }
    })

    it('should create an instance', () => {
        expect(directive).toBeTruthy()
    })
})
