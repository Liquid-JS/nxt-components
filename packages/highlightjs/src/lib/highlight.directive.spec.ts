import { Component, DebugElement } from '@angular/core'
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import hljs from 'highlight.js'
import { afterTimeout, highlightLoaderStub } from '../test-helpers'
import { HighlightDirective } from './highlight.directive'
import { HighlightLoader } from './highlight.loader'

@Component({
    template: '<code [nxtHighlight]="code" [language]="language"></code>',
    imports: [
        HighlightDirective
    ]
})
class TestHighlightComponent {
    code?: string
    language?: string
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
                { provide: HighlightLoader, useValue: highlightLoaderStub },
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
        component.code = ''
        fixture.detectChanges()
        expect(directiveElement.nativeElement.innerHTML).toBe('')
    })

    it('should highlight code reactively', async () => {
        component.language = 'ts'
        component.code = testJsCode
        fixture.detectChanges()

        let highlightedCode: string = hljs.highlight(testJsCode, {
            language: component.language,
            ignoreIllegals: false
        }).value

        await afterTimeout(200)
        expect(directiveElement.nativeElement.innerHTML).toBe(highlightedCode)

        // Change code 2nd time with another value
        component.language = 'html'
        component.code = testHtmlCode
        fixture.detectChanges()

        highlightedCode = hljs.highlight(testHtmlCode, {
            language: component.language,
            ignoreIllegals: false
        }).value

        await afterTimeout(200)
        expect(directiveElement.nativeElement.innerHTML).toBe(highlightedCode)

        // Change code 3rd time but with empty string
        component.code = ''
        fixture.detectChanges()

        await afterTimeout(200)
        expect(directiveElement.nativeElement.innerHTML).toBe('')

        // Change code 4th time but with undefinedish value
        component.code = undefined
        fixture.detectChanges()

        await afterTimeout(200)
        expect(directiveElement.nativeElement.innerHTML).toBe('')
    })
})
