import { TestBed } from '@angular/core/testing'
import { NXT_HIGHLIGHT_OPTIONS, HighlightJSOptions, provideHighlightOptions } from './highlight.model'

const fullLibraryLoader = () => import('highlight.js').then(r => r.default)

describe('Highlight Options', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                provideHighlightOptions({ fullLibraryLoader })
            ]
        }).compileComponents()
    })

    it('should be able to provide options using provideHighlightOptions function', () => {
        const options: HighlightJSOptions = TestBed.inject(NXT_HIGHLIGHT_OPTIONS)
        expect(options).toBeTruthy()
    })
})
