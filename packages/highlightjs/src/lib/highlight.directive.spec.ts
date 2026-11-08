import { Component, DebugElement, Injectable, resource, signal } from '@angular/core'
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import hljs from 'highlight.js'
import { afterTimeout, HighlightLoaderStub } from '../test-helpers'
import { HighlightDirective } from './highlight.directive'
import { HighlightLoader } from './highlight.loader'

@Component({
    template: '<code [nxtHighlight]="code()" [language]="language()"></code>',
    imports: [
        HighlightDirective
    ]
})
class TestHighlightComponent {
    readonly code = signal<string | undefined>(undefined)
    readonly language = signal<string | undefined>(undefined)
}

describe('Highlight Directive', () => {
    let component: TestHighlightComponent
    let directiveElement: DebugElement
    let directiveInstance: HighlightDirective
    let fixture: ComponentFixture<TestHighlightComponent>

    const testJsCode: string = 'console.log(&quot;test&quot;)'
    const testHtmlCode: string = '<div class=&quot;my-class&quot;></div>'

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                { provide: HighlightLoader, useClass: HighlightLoaderStub },
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        }).compileComponents()

        fixture = TestBed.createComponent(TestHighlightComponent)
        await fixture.whenStable()
        component = fixture.componentInstance
        directiveElement = fixture.debugElement.query(By.directive(HighlightDirective))
        directiveInstance = directiveElement.injector.get(HighlightDirective)
    })

    it('should create highlight directive add hljs class', () => {
        expect(directiveInstance).toBeTruthy()
        expect(directiveElement.nativeElement.classList.contains('hljs')).toBeTruthy()
    })

    it('should reset text if empty string was passed', () => {
        component.code.set('')
        fixture.detectChanges()
        expect(directiveElement.nativeElement.innerHTML).toBe('')
    })

    it('should highlight code reactively', async () => {
        component.language.set('ts')
        component.code.set(testJsCode)
        fixture.detectChanges()

        let highlightedCode: string = hljs.highlight(testJsCode, {
            language: component.language()!,
            ignoreIllegals: false
        }).value

        await afterTimeout(200)
        expect(directiveElement.nativeElement.innerHTML).toBe(highlightedCode)

        // Change code 2nd time with another value
        component.language.set('html')
        component.code.set(testHtmlCode)
        fixture.detectChanges()

        highlightedCode = hljs.highlight(testHtmlCode, {
            language: component.language()!,
            ignoreIllegals: false
        }).value

        await afterTimeout(200)
        expect(directiveElement.nativeElement.innerHTML).toBe(highlightedCode)

        // Change code 3rd time but with empty string
        component.code.set('')
        fixture.detectChanges()

        await afterTimeout(200)
        expect(directiveElement.nativeElement.innerHTML).toBe('')

        // Change code 4th time but with undefinedish value
        component.code.set(undefined)
        fixture.detectChanges()

        await afterTimeout(200)
        expect(directiveElement.nativeElement.innerHTML).toBe('')
    })

    it('should show code in a language that isn\'t loaded, or without a language, as text', async () => {
        component.language.set('not-a-language')
        component.code.set('<b>bold</b>')
        fixture.detectChanges()

        await afterTimeout(200)
        expect(directiveElement.nativeElement.innerHTML).toBe('&lt;b&gt;bold&lt;/b&gt;')
        expect(directiveInstance.highlightResult()).toBeUndefined()

        component.language.set(undefined)
        component.code.set('x < y')
        fixture.detectChanges()

        await afterTimeout(200)
        expect(directiveElement.nativeElement.textContent).toBe('x < y')
        expect(directiveElement.nativeElement.querySelector('span')).toBeNull()
    })
})

@Injectable({ providedIn: 'root' })
class PendingHighlightLoaderStub {
    readonly hljs = resource({
        loader: () => new Promise<never>(() => undefined)
    }).asReadonly()
}

describe('Highlight Directive before Highlight.js loads', () => {
    let component: TestHighlightComponent
    let element: HTMLElement
    let fixture: ComponentFixture<TestHighlightComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                { provide: HighlightLoader, useClass: PendingHighlightLoaderStub },
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        }).compileComponents()

        fixture = TestBed.createComponent(TestHighlightComponent)
        component = fixture.componentInstance
        element = fixture.debugElement.query(By.directive(HighlightDirective)).nativeElement
    })

    it('should show the code as text', () => {
        component.language.set('ts')
        component.code.set('const a = 1')
        fixture.detectChanges()

        expect(element.innerHTML).toBe('const a = 1')
    })

    it('should keep code that\'s already highlighted, e.g. on the server', () => {
        const highlighted = hljs.highlight('const a = 1', { language: 'ts' }).value
        element.innerHTML = highlighted

        component.language.set('ts')
        component.code.set('const a = 1')
        fixture.detectChanges()

        expect(element.innerHTML).toBe(highlighted)
    })
})
