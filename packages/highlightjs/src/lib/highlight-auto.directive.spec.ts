import { Component, DebugElement } from '@angular/core'
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import hljs from 'highlight.js'
import { afterTimeout, highlightLoaderStub } from '../test-helpers'
import { HighlightAutoDirective } from './highlight-auto.directive'
import { HighlightLoader } from './highlight.loader'

@Component({
    template: '<code [nxtHighlightAuto]="code"></code>',
    imports: [HighlightAutoDirective]
})
class TestHighlightComponent {
    code?: string
}

describe('HighlightAuto Directive', () => {
    let component: TestHighlightComponent
    let directiveElement: DebugElement
    let directiveInstance: HighlightAutoDirective
    let fixture: ComponentFixture<TestHighlightComponent>

    const testJsCode: string = 'console.log(&quot;test&quot;)'
    const testHtmlCode: string = '<div class=&quot;my-class&quot;></div>'

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HighlightAutoDirective, TestHighlightComponent],
            providers: [
                { provide: HighlightLoader, useValue: highlightLoaderStub },
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        }).compileComponents()

        fixture = TestBed.createComponent(TestHighlightComponent)
        await fixture.whenStable()
        component = fixture.componentInstance
        directiveElement = fixture.debugElement.query(By.directive(HighlightAutoDirective))
        directiveInstance = directiveElement.injector.get<HighlightAutoDirective>(HighlightAutoDirective)
    })

    it('[Content-Security-Policy (CSP)] highlight element when trustedTypes is not supported by the browser', async () => {
        const trustedTypesBackup = (window as any)['trustedTypes']
        delete (window as any)['trustedTypes']
        component.code = testJsCode
        fixture.detectChanges()

        const highlightedCode: string = hljs.highlightAuto(testJsCode).value

        await afterTimeout(100)
        expect(directiveElement.nativeElement.innerHTML).toBe(highlightedCode);
        (window as any)['trustedTypes'] = trustedTypesBackup
    })

    it('should create highlightAuto directive add hljs class', () => {
        expect(directiveInstance).toBeTruthy()
        expect(directiveElement.nativeElement.classList.contains('hljs')).toBeTruthy()
    })

    it('should reset text if empty string was passed', () => {
        component.code = ''
        fixture.detectChanges()
        expect(directiveElement.nativeElement.innerHTML).toBe('')
    })

    it('should highlight given text and highlight another text when change', async () => {
        component.code = testJsCode
        fixture.detectChanges()

        let highlightedCode: string = hljs.highlightAuto(testJsCode).value

        await afterTimeout(200)
        expect(directiveElement.nativeElement.innerHTML).toBe(highlightedCode)

        // Change code 2nd time with another value
        component.code = testHtmlCode
        fixture.detectChanges()

        highlightedCode = hljs.highlightAuto(testHtmlCode).value

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
