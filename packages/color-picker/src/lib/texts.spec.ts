import { Component, signal } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ColorPickerDirective } from './color-picker.directive'
import { provideColorPickerTexts } from './texts'

@Component({
    template: '<input [nxtColor]="color()" (nxtColorChange)="color.set($event)" [presetColors]="[\'#ff0000\']" [okButton]="true" [cancelButton]="true" />',
    imports: [ColorPickerDirective]
})
class TextsHostComponent {
    readonly color = signal('#ff0000')
}

describe('Color picker texts', () => {
    let fixture: ComponentFixture<TextsHostComponent>

    const render = async () => {
        fixture.detectChanges()
        await fixture.whenStable()
        fixture.detectChanges()
    }
    const open = async () => {
        fixture.nativeElement.querySelector('input').dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
        await render()
    }
    const dialog = () => document.querySelector<HTMLElement>('.color-picker') as HTMLElement
    const buttons = () => Array.from(dialog().querySelectorAll<HTMLElement>('.color-picker__buttons button')).map(button => button.textContent?.trim())
    const create = async () => {
        fixture = TestBed.createComponent(TextsHostComponent)
        document.body.appendChild(fixture.nativeElement)
        await render()
        await open()
    }

    afterEach(() => {
        fixture.destroy()
        document.querySelectorAll('.cdk-overlay-container').forEach(el => el.remove())
    })

    it('should show and announce the default texts', async () => {
        await create()

        expect(dialog().getAttribute('aria-label')).toBe('Color picker')
        expect(buttons()).toEqual(['Cancel', 'OK'])
        expect(dialog().querySelector('.color-picker__preset-label')?.textContent?.trim()).toBe('Preset colors')
        expect(dialog().querySelector('.color-picker__preset-item')?.getAttribute('aria-label')).toBe('Preset color #ff0000')
        const arrows = Array.from(dialog().querySelectorAll('.color-picker__input-type-arrow')).map(arrow => arrow.getAttribute('aria-label'))
        expect(arrows).toEqual(['Next color format', 'Previous color format'])
        expect(dialog().querySelector('.color-picker__input-field input')?.getAttribute('aria-label')).toBe('Hex color')
    })

    it('should take the texts the app provides, also as a function it follows', async () => {
        const ok = signal('Apply')
        TestBed.configureTestingModule({
            providers: [provideColorPickerTexts(() => ({ ok: ok(), presetColors: 'Brand colors' }))]
        })
        await create()

        expect(buttons()).toEqual(['Cancel', 'Apply'])
        expect(dialog().querySelector('.color-picker__preset-label')?.textContent?.trim()).toBe('Brand colors')

        ok.set('Use color')
        await render()
        expect(buttons()).toEqual(['Cancel', 'Use color'])
    })
})
