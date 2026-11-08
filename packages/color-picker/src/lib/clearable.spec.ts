import { Component, signal } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ColorPickerDirective } from './color-picker.directive'

@Component({
    template: '<input [nxtColor]="color()" (nxtColorChange)="color.set($event)" [clearable]="clearable()" [okButton]="true" />',
    imports: [ColorPickerDirective]
})
class ClearableHostComponent {
    readonly color = signal('#ff0000')
    readonly clearable = signal(true)
}

describe('ColorPickerDirective clearable', () => {
    let fixture: ComponentFixture<ClearableHostComponent>
    let input: HTMLInputElement

    const render = async () => {
        fixture.detectChanges()
        await fixture.whenStable()
        fixture.detectChanges()
    }
    const dialog = () => document.querySelector<HTMLElement>('.color-picker')
    const clear = () => dialog()?.querySelector<HTMLButtonElement>('.color-picker__clear')
    const type = async (text: string) => {
        input.value = text
        input.dispatchEvent(new Event('input'))
        await render()
    }

    beforeEach(async () => {
        fixture = TestBed.createComponent(ClearableHostComponent)
        document.body.appendChild(fixture.nativeElement)
        await render()
        input = fixture.nativeElement.querySelector('input')
    })

    afterEach(() => {
        fixture.destroy()
        document.querySelectorAll('.cdk-overlay-container').forEach(el => el.remove())
    })

    it('should clear the color with the dialog\'s Clear button, and close it', async () => {
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
        await render()
        expect(clear()?.textContent?.trim()).toBe('Clear')

        clear()?.click()
        await render()
        expect(fixture.componentInstance.color()).toBe('')
        expect(dialog()).toBeNull()
        expect(document.activeElement).toBe(input)
    })

    it('should clear the color when the input is emptied', async () => {
        await type('')
        expect(fixture.componentInstance.color()).toBe('')
    })

    it('should not clear the color without clearable', async () => {
        fixture.componentInstance.clearable.set(false)
        await render()
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
        await render()
        expect(clear()).toBeNull()

        await type('')
        expect(fixture.componentInstance.color()).not.toBe('')
    })
})
