import { ElementRef, ViewContainerRef } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Overlay } from '@angular/cdk/overlay'
import { ColorPickerDirective } from '../color-picker.directive'
import { ColorPickerComponent } from './color-picker.component'

describe('ColorPickerComponent', () => {
    let parentEl: HTMLDivElement
    let targetEl: HTMLDivElement

    let component: ColorPickerComponent
    let directive: ColorPickerDirective
    let fixture: ComponentFixture<ColorPickerComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({})
            .compileComponents()
    })

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

        fixture = TestBed.createComponent(ColorPickerComponent)
        component = fixture.componentInstance
        directive['dialog'] = component
        directive['setupDialog']()
        fixture.detectChanges()
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

    it('should create', () => expect(component).toBeTruthy())
})
