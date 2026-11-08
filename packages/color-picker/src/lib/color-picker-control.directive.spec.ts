import { Component, signal, Type } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { form, FormField } from '@angular/forms/signals'
import { ColorPickerControlDirective } from './color-picker-control.directive'
import { ColorPickerDirective } from './color-picker.directive'

const imports = [ColorPickerDirective, ColorPickerControlDirective]

@Component({
    template: '<input nxtColor [formControl]="control" outputFormat="hex" alphaChannel="disabled" clearable />',
    imports: [...imports, ReactiveFormsModule]
})
class ReactiveHostComponent {
    readonly control = new FormControl<string | null>('#ff0000')
    value = () => this.control.value
}

@Component({
    template: '<form><input nxtColor name="color" [(ngModel)]="color" outputFormat="hex" alphaChannel="disabled" clearable /></form>',
    imports: [...imports, FormsModule]
})
class TemplateDrivenHostComponent {
    color: string | null = '#ff0000'
    value = () => this.color
}

@Component({
    template: '<input nxtColor [formField]="colors.color" outputFormat="hex" alphaChannel="disabled" clearable />',
    imports: [...imports, FormField]
})
class SignalFormsHostComponent {
    readonly model = signal<{ color: string | null }>({ color: '#ff0000' })
    readonly colors = form(this.model)
    value = () => this.model().color
}

const hosts: Array<[string, Type<{ value: () => string | null }>]> = [
    ['reactive', ReactiveHostComponent],
    ['template-driven', TemplateDrivenHostComponent],
    ['signal', SignalFormsHostComponent]
]

describe('ColorPickerControlDirective', () => {
    let fixture: ComponentFixture<{ value: () => string | null }>
    let input: HTMLInputElement

    const render = async () => {
        fixture.detectChanges()
        await fixture.whenStable()
        fixture.detectChanges()
    }
    const dialog = () => document.querySelector<HTMLElement>('.color-picker')
    const open = async () => {
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
        await render()
    }
    const type = async (text: string) => {
        input.value = text
        input.dispatchEvent(new Event('input'))
        await render()
    }
    const create = async (host: Type<{ value: () => string | null }>) => {
        fixture = TestBed.createComponent(host)
        document.body.appendChild(fixture.nativeElement)
        await render()
        input = fixture.nativeElement.querySelector('input')
    }

    afterEach(() => {
        fixture.destroy()
        document.querySelectorAll('.cdk-overlay-container').forEach(el => el.remove())
    })

    for (const [name, host] of hosts) {
        it(`should show and give the color in ${name} forms`, async () => {
            await create(host)
            expect(input.value).toBe('#ff0000')

            await type('#00ff00')
            expect(fixture.componentInstance.value()).toBe('#00ff00')

            // The dialog clears the color, which the input shows.
            await open()
            dialog()?.querySelector<HTMLButtonElement>('.color-picker__clear')?.click()
            await render()
            expect(fixture.componentInstance.value()).toBeNull()
            expect(input.value).toBe('')
        })
    }

    it('should not give the form text that isn\'t a color, with the dialog open or closed', async () => {
        await create(ReactiveHostComponent)
        const control = (fixture.componentInstance as ReactiveHostComponent).control

        await type('#00ff0')
        expect(control.value).toBe('#ff0000')
        await type('#00ff00')
        expect(control.value).toBe('#00ff00')

        await open()
        expect(dialog()).toBeTruthy()
        await type('blue-ish')
        expect(control.value).toBe('#00ff00')
    })

    it('should not give the form a color that only differs in spaces or case', async () => {
        await create(ReactiveHostComponent)
        const control = (fixture.componentInstance as ReactiveHostComponent).control
        control.setValue('#FF0000')
        control.markAsPristine()
        await render()

        await type('#ff0000')
        expect(control.value).toBe('#FF0000')
        expect(control.dirty).toBe(false)
    })

    it('should follow the disabled state and be touched once the dialog closes', async () => {
        await create(ReactiveHostComponent)
        const control = (fixture.componentInstance as ReactiveHostComponent).control

        await open()
        expect(dialog()).toBeTruthy()
        expect(control.touched).toBe(false)
        document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape', bubbles: true }))
        await render()
        expect(dialog()).toBeNull()
        expect(control.touched).toBe(true)

        control.disable()
        await render()
        expect(input.disabled).toBe(true)
        await open()
        expect(dialog()).toBeNull()
    })
})
