import { ElementRef } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { SliderDirective } from './slider.directive'

describe('SliderDirective', () => {
    let targetEl: HTMLDivElement

    let directive: SliderDirective

    beforeEach(() => {
        targetEl = document.createElement('div')
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: ElementRef,
                    useValue: new ElementRef(targetEl)
                }
            ]
        }).runInInjectionContext(() => {
            directive = new SliderDirective()
        })
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
