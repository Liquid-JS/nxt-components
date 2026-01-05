import { TestBed } from '@angular/core/testing'
import { TextDirective } from './text.directive'

describe('TextDirective', () => {
    it('should create an instance', () => {
        TestBed.runInInjectionContext(() => {
            const directive = new TextDirective()
            expect(directive).toBeTruthy()
        })
    })
})
