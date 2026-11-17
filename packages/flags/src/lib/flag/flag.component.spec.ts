import { Provider } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideFlagsPath } from '../path'
import { FlagComponent } from './flag.component'

describe('FlagComponent', () => {
    let fixture: ComponentFixture<FlagComponent>
    let element: HTMLElement

    const create = async (providers: Provider[] = []) => {
        await TestBed.configureTestingModule({
            imports: [FlagComponent],
            providers
        }).compileComponents()
        fixture = TestBed.createComponent(FlagComponent)
        element = fixture.nativeElement
    }

    const show = (inputs: Partial<Record<'country' | 'label', string>>) => {
        for (const [name, value] of Object.entries(inputs)) {
            fixture.componentRef.setInput(name, value)
        }
        fixture.detectChanges()
    }

    describe('with the default path', () => {
        beforeEach(() => create())

        it('should show the flag from assets/flags', () => {
            show({ country: 'br' })
            expect(element.style.backgroundImage).toContain('assets/flags/br.svg')
        })

        it('should find a country by its other codes and names', () => {
            show({ country: 'BRA' })
            expect(element.style.backgroundImage).toContain('assets/flags/br.svg')
        })

        it('should hide a flag it does not have', () => {
            show({ country: 'zz' })
            expect(element.style.display).toBe('none')
        })

        it('should be decorative without a label, and an image with one', () => {
            show({ country: 'br' })
            expect(element.getAttribute('aria-hidden')).toBe('true')
            expect(element.getAttribute('role')).toBeNull()

            show({ label: 'Brazil' })
            expect(element.getAttribute('aria-hidden')).toBeNull()
            expect(element.getAttribute('role')).toBe('img')
            expect(element.getAttribute('aria-label')).toBe('Brazil')
        })
    })

    it('should take the flags from another folder', async () => {
        await create([provideFlagsPath('/static/flags')])
        show({ country: 'br' })
        expect(element.style.backgroundImage).toContain('/static/flags/br.svg')
    })

    it('should take the flags from the URL a function gives', async () => {
        await create([provideFlagsPath((code) => `https://cdn.example.com/flags/${code}.svg?v=2`)])
        show({ country: 'br' })
        expect(element.style.backgroundImage).toContain('https://cdn.example.com/flags/br.svg?v=2')
    })
})
