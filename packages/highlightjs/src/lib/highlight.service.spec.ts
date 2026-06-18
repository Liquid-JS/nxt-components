import { TestBed } from '@angular/core/testing'
import { HighlightLoaderStub } from '../test-helpers'
import { HighlightLoader } from './highlight.loader'
import { HighlightJS } from './highlight.service'

describe('Highlight Service', () => {

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                { provide: HighlightLoader, useClass: HighlightLoaderStub }
            ]
        }).compileComponents()
    })

    it('should be created', () => {
        const service: HighlightJS = TestBed.inject(HighlightJS)
        expect(service).toBeTruthy()
    })
})
