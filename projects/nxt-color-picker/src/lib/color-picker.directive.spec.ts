import { ApplicationRef, ComponentFactoryResolver, ElementRef, Injector } from '@angular/core'
import { inject } from '@angular/core/testing'
import { ColorPickerDirective } from './color-picker.directive'

describe('ColorPickerDirective', () => {
    let parentEl: HTMLDivElement
    let targetEl: HTMLDivElement

    let directive: ColorPickerDirective

    beforeEach(inject([Injector, ComponentFactoryResolver, ApplicationRef], (inj: Injector, cfr: ComponentFactoryResolver, app: ApplicationRef) => {
        parentEl = document.createElement('div')
        targetEl = document.createElement('div')
        parentEl.appendChild(targetEl)
        directive = new ColorPickerDirective(inj, cfr, app, null, new ElementRef(targetEl))
    }))

    afterEach(() => {
        if (targetEl) {
            targetEl.remove()
        }

        if (parentEl) {
            parentEl.remove()
        }

        document.querySelectorAll('.color-picker').forEach(el => el.remove())
    })

    it('should create an instance', () => {
        expect(directive).toBeTruthy()
    })
})
