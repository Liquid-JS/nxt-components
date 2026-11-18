import { Component, ElementRef, signal, ViewContainerRef, ViewEncapsulation } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
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

@Component({
    template: '<input [nxtColor]="color()" (nxtColorChange)="color.set($event)" (colorSelectCancel)="cancelled = cancelled + 1" outputFormat="hex" alphaChannel="disabled" />',
    imports: [ColorPickerDirective]
})
class KeyboardHostComponent {
    readonly color = signal('#ff0000')
    cancelled = 0
}

describe('ColorPickerDirective by keyboard', () => {
    let fixture: ComponentFixture<KeyboardHostComponent>
    let input: HTMLInputElement

    const render = async () => {
        fixture.detectChanges()
        await fixture.whenStable()
        fixture.detectChanges()
    }
    const key = (target: Element, init: KeyboardEventInit, type = 'keydown') => {
        const event = new KeyboardEvent(type, { bubbles: true, cancelable: true, ...init })
        target.dispatchEvent(event)
        return event
    }
    const dialog = () => document.querySelector<HTMLElement>('.color-picker')
    const sliders = () => Array.from(document.querySelectorAll<HTMLElement>('.color-picker [role=slider]'))

    beforeEach(async () => {
        fixture = TestBed.createComponent(KeyboardHostComponent)
        document.body.appendChild(fixture.nativeElement)
        await render()
        input = fixture.nativeElement.querySelector('input')
    })

    afterEach(() => {
        fixture.destroy()
        document.querySelectorAll('.cdk-overlay-container').forEach(el => el.remove())
    })

    it('should open the dialog and move focus into it with Arrow Down', async () => {
        expect(input.getAttribute('aria-haspopup')).toBe('dialog')
        expect(input.getAttribute('aria-expanded')).toBe('false')

        key(input, { key: 'ArrowDown' })
        await render()

        expect(dialog()?.getAttribute('role')).toBe('dialog')
        expect(dialog()?.getAttribute('aria-label')).toBe('Color picker')
        expect(input.getAttribute('aria-expanded')).toBe('true')
        expect(document.activeElement).toBe(sliders()[0])
    })

    it('should name the sliders and give their values', async () => {
        key(input, { key: 'ArrowDown' })
        await render()

        const [area, hue] = sliders()
        expect(area.getAttribute('aria-label')).toBe('Saturation and brightness')
        expect(area.getAttribute('aria-valuetext')).toBe('Saturation 100%, brightness 100%')
        expect(area.getAttribute('tabindex')).toBe('0')
        expect(hue.getAttribute('aria-label')).toBe('Hue')
        expect(hue.getAttribute('aria-valuetext')).toBe('0°')
    })

    it('should change the color with the arrow keys, Page Up and Down, Home and End', async () => {
        key(input, { key: 'ArrowDown' })
        await render()
        const [area, hue] = sliders()

        // Down lowers the brightness by a tenth with Shift.
        key(area, { key: 'ArrowDown', shiftKey: true })
        await render()
        expect(area.getAttribute('aria-valuetext')).toBe('Saturation 100%, brightness 90%')
        expect(fixture.componentInstance.color()).toBe('#e60000')

        key(hue, { key: 'End' })
        await render()
        expect(hue.getAttribute('aria-valuenow')).toBe('100')

        key(hue, { key: 'Home' })
        await render()
        key(hue, { key: 'PageUp' })
        await render()
        expect(hue.getAttribute('aria-valuetext')).toBe('36°')
    })

    it('should keep Tab within the dialog', async () => {
        key(input, { key: 'ArrowDown' })
        await render()
        const first = sliders()[0]
        const controls = Array.from(dialog()!.querySelectorAll<HTMLElement>('[tabindex="0"], input, button'))
            .filter(el => el.offsetParent != null)
        const last = controls[controls.length - 1]

        last.focus()
        expect(key(last, { key: 'Tab' }).defaultPrevented).toBeTrue()
        expect(document.activeElement).toBe(first)

        expect(key(first, { key: 'Tab', shiftKey: true }).defaultPrevented).toBeTrue()
        expect(document.activeElement).toBe(last)
    })

    it('should cancel with Escape and return focus to the field without opening the dialog again', async () => {
        key(input, { key: 'ArrowDown' })
        await render()
        key(sliders()[0], { key: 'ArrowDown', shiftKey: true })
        await render()
        expect(fixture.componentInstance.color()).toBe('#e60000')

        key(document.activeElement!, { key: 'Escape' }, 'keyup')
        await render()

        expect(document.activeElement).toBe(input)
        expect(input.getAttribute('aria-expanded')).toBe('false')
        expect(fixture.componentInstance.color()).toBe('#ff0000')
        expect(fixture.componentInstance.cancelled).toBe(1)
    })

    it('should open the dialog again with Arrow Down after Escape', async () => {
        key(input, { key: 'ArrowDown' })
        await render()
        key(document.activeElement!, { key: 'Escape' }, 'keyup')
        await render()
        expect(dialog()).toBeNull()

        key(input, { key: 'ArrowDown' })
        await render()
        expect(dialog()).not.toBeNull()
        expect(document.activeElement).toBe(sliders()[0])
    })

    it('should leave Escape alone while the dialog is closed', async () => {
        key(input, { key: 'ArrowDown' })
        await render()
        key(document.activeElement!, { key: 'Escape' }, 'keyup')
        await render()

        key(document.body, { key: 'Escape' }, 'keyup')
        await render()
        expect(fixture.componentInstance.cancelled).toBe(1)
    })
})

@Component({
    template: `<ng-container dialogDisplay="inline" [(nxtColor)]="color" />
<input class="trigger" [(nxtColor)]="color" />`,
    imports: [ColorPickerDirective]
})
class ContainerHostComponent {
    color = '#ff0000'
}

describe('ColorPickerDirective on ng-container', () => {
    it('should render inline without setting attributes on the container', async () => {
        const fixture = TestBed.createComponent(ContainerHostComponent)
        fixture.detectChanges()
        await fixture.whenStable()
        fixture.detectChanges()

        expect(fixture.nativeElement.querySelector('.color-picker')).not.toBeNull()
        expect(fixture.nativeElement.querySelector('input.trigger').getAttribute('aria-expanded')).toBe('false')
        fixture.destroy()
    })
})

@Component({
    template: `<div class="inline" dialogDisplay="inline" [(nxtColor)]="color" [dialogClass]="dialogClass()"></div>
<input class="popup" [(nxtColor)]="color" [dialogClass]="dialogClass()" />`,
    styles: `nxt-color-picker {
    --nxt-color-picker-border: 1px solid #ccc;
    --nxt-color-picker-border-radius: 8px;
}`,
    encapsulation: ViewEncapsulation.None,
    imports: [ColorPickerDirective]
})
class DialogHostComponent {
    color = '#ff0000'
    readonly dialogClass = signal<string | string[] | undefined>('one two')
}

describe('ColorPickerDirective dialog', () => {
    let fixture: ComponentFixture<DialogHostComponent>

    async function render() {
        fixture.detectChanges()
        await fixture.whenStable()
        fixture.detectChanges()
    }

    beforeEach(async () => {
        fixture = TestBed.createComponent(DialogHostComponent)
        await render()
    })

    afterEach(() => fixture.destroy())

    const inline = () => fixture.nativeElement.querySelector('nxt-color-picker') as HTMLElement
    const popup = () => [...document.querySelectorAll<HTMLElement>('nxt-color-picker')]
        .find(element => !fixture.nativeElement.contains(element))

    it('should give the dialog its classes, and change them', async () => {
        expect([...inline().classList]).toEqual(['one', 'two'])

        fixture.componentInstance.dialogClass.set(['two', 'three'])
        await render()
        expect([...inline().classList]).toEqual(['two', 'three'])

        fixture.componentInstance.dialogClass.set(undefined)
        await render()
        expect([...inline().classList]).toEqual([])
    })

    it('should give a popup dialog its classes', async () => {
        fixture.nativeElement.querySelector('input.popup').click()
        await render()
        expect(popup()?.classList.contains('one')).toBe(true)
        expect(popup()?.classList.contains('two')).toBe(true)
    })

    it('should round the colors at the top as the dialog is', () => {
        const style = getComputedStyle(inline().querySelector('.color-picker__sv')!)
        expect(style.borderTopLeftRadius).toBe('8px')
        expect(style.borderTopRightRadius).toBe('8px')
        expect(style.borderBottomLeftRadius).toBe('0px')
    })
})
