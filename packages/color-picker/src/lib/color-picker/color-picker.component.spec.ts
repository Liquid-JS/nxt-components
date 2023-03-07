import { ApplicationRef, ElementRef, Injector } from '@angular/core'
import { ComponentFixture, inject, TestBed } from '@angular/core/testing'
import { ColorPickerDirective } from '../color-picker.directive'
import { SliderDirective } from '../slider.directive'
import { TextDirective } from '../text.directive'
import { ColorPickerComponent } from './color-picker.component'

describe('ColorPickerComponent', () => {
    let parentEl: HTMLDivElement
    let targetEl: HTMLDivElement

    let component: ColorPickerComponent
    let directive: ColorPickerDirective
    let fixture: ComponentFixture<ColorPickerComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                SliderDirective,
                TextDirective,
                ColorPickerComponent
            ]
        })
            .compileComponents()
    })

    beforeEach(inject([Injector, ApplicationRef], (inj: Injector, app: ApplicationRef) => {
        parentEl = document.createElement('div')
        targetEl = document.createElement('div')
        parentEl.appendChild(targetEl)
        directive = new ColorPickerDirective(inj, app, undefined as any, new ElementRef(targetEl), undefined as any)

        fixture = TestBed.createComponent(ColorPickerComponent)
        component = fixture.componentInstance
        directive['dialog'] = component
        directive['setupDialog']()
        fixture.detectChanges()
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

    it('should create', () => expect(component).toBeTruthy())
})
