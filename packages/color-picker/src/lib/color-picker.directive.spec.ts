import { ElementRef, ViewContainerRef } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { Overlay } from '@angular/cdk/overlay'
import { ColorPickerDirective } from './color-picker.directive'

describe('ColorPickerDirective', () => {
    let parentEl: HTMLDivElement
    let targetEl: HTMLDivElement

    let directive: ColorPickerDirective

    beforeEach(() => {
        parentEl = document.createElement('div')
        targetEl = document.createElement('div')
        parentEl.appendChild(targetEl)

        TestBed.configureTestingModule({
            providers: [
                {
                    provide: ViewContainerRef,
                    useValue: undefined
                },
                {
                    provide: ElementRef,
                    useValue: new ElementRef(targetEl)
                },
                {
                    provide: Overlay,
                    useValue: undefined
                }
            ]
        }).runInInjectionContext(() => {
            directive = new ColorPickerDirective()
        })
    })

    afterEach(() => {
        if (targetEl) {
            targetEl.remove()
        }

        if (parentEl) {
            parentEl.remove()
        }

        document.querySelectorAll('.color-picker').forEach(el => el.remove())
    })

    it('should create an instance', async () => expect(directive).toBeTruthy())
})
