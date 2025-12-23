import { TestBed } from '@angular/core/testing'
import hljs, { HLJSApi } from 'highlight.js'
import { HighlightLoader } from './highlight.loader'
import { NXT_HIGHLIGHT_OPTIONS, HighlightJSOptions } from './highlight.model'
import { LoaderErrors } from './loader-errors'

const fullLibraryLoader = () => import('highlight.js').then(r => r.default)
const lineNumbersLoader = () => import('nxt-highlightjs/line-numbers')
const coreLibraryLoader = () => import('highlight.js/lib/core').then(r => r.default)
const typescript = () => import('highlight.js/lib/languages/typescript').then(r => r.default)

describe('Highlight Loader', () => {
    it('should load the library when fullLibrary is provided', async () => {
        TestBed.overrideProvider(NXT_HIGHLIGHT_OPTIONS, {
            useValue: {
                fullLibraryLoader
            } as HighlightJSOptions
        })

        const loader: HighlightLoader = TestBed.inject(HighlightLoader)
        const lib: HLJSApi = await loader.ready
        expect(lib).toBe(hljs)
    })

    it('should load the library when coreLibrary is provided', async () => {
        TestBed.overrideProvider(NXT_HIGHLIGHT_OPTIONS, {
            useValue: {
                coreLibraryLoader,
                languages: {
                    typescript
                }
            } as HighlightJSOptions
        })

        const loader: HighlightLoader = TestBed.inject(HighlightLoader)
        const lib: HLJSApi = await loader.ready
        expect(lib).toBe(hljs)
    })

    it('should load the library when lineNumber is provided', async () => {
        TestBed.overrideProvider(NXT_HIGHLIGHT_OPTIONS, {
            useValue: {
                fullLibraryLoader,
                lineNumbersLoader
            } as HighlightJSOptions
        })

        const loader: HighlightLoader = TestBed.inject(HighlightLoader)
        const lib: HLJSApi = await loader.ready
        expect(lib).toBe(hljs)
        expect((lib as any).lineNumbersBlock).toBeTruthy()
    })

    it('should throw an error if library options did not exist', async () => {
        try {
            const loader: HighlightLoader = TestBed.inject(HighlightLoader)
            await loader.ready
        } catch (error) {
            expect((error as Error).message).toContain(LoaderErrors.NO_FULL_AND_NO_CORE_IMPORTS)
        }
    })

    it('should throw an error if both fullLibrary and coreLibrary loaders were provided', async () => {
        try {
            TestBed.overrideProvider(NXT_HIGHLIGHT_OPTIONS, {
                useValue: {
                    fullLibraryLoader,
                    coreLibraryLoader
                } as HighlightJSOptions
            })
            const loader: HighlightLoader = TestBed.inject(HighlightLoader)
            await loader.ready
        } catch (error) {
            expect((error as Error).message).toContain(LoaderErrors.FULL_WITH_CORE_LIBRARY_IMPORTS)
        }
    })

    it('should throw an error if both fullLibrary and languages loaders were provided', async () => {
        try {
            TestBed.overrideProvider(NXT_HIGHLIGHT_OPTIONS, {
                useValue: {
                    fullLibraryLoader,
                    languages: {
                        typescript
                    }
                } as HighlightJSOptions
            })
            const loader: HighlightLoader = TestBed.inject(HighlightLoader)
            await loader.ready
        } catch (error) {
            expect((error as Error).message).toContain(LoaderErrors.FULL_WITH_LANGUAGE_IMPORTS)
        }
    })

    it('should throw an error if coreLibrary was provided without any language', async () => {
        try {
            TestBed.overrideProvider(NXT_HIGHLIGHT_OPTIONS, {
                useValue: {
                    coreLibraryLoader
                } as HighlightJSOptions
            })
            const loader: HighlightLoader = TestBed.inject(HighlightLoader)
            await loader.ready
        } catch (error) {
            expect((error as Error).message).toContain(LoaderErrors.CORE_WITHOUT_LANGUAGE_IMPORTS)
        }
    })

    it('should throw an error if languages were provided without the coreLibrary', async () => {
        try {
            TestBed.overrideProvider(NXT_HIGHLIGHT_OPTIONS, {
                useValue: {
                    languages: {
                        typescript
                    }
                } as HighlightJSOptions
            })
            const loader: HighlightLoader = TestBed.inject(HighlightLoader)
            await loader.ready
        } catch (error) {
            expect((error as Error).message).toContain(LoaderErrors.LANGUAGE_WITHOUT_CORE_IMPORTS)
        }
    })

    it('should create style element when loading a theme', () => {
        const loader: HighlightLoader = TestBed.inject(HighlightLoader)

        const path: string = 'https://path-to-theme.css/'

        const linkElement: HTMLLinkElement = document.createElement('link')
        const createElementSpy: jasmine.Spy = spyOn(document, 'createElement').and.returnValue(linkElement)
        const appendChildSpy: jasmine.Spy = spyOn(document.head, 'appendChild');

        (loader as any).loadTheme(path)

        expect(createElementSpy).toHaveBeenCalledWith('link')
        expect(loader['themeLinkElement']).toBeTruthy()
        expect(loader['themeLinkElement']?.href).toBe(path)
        expect(loader['themeLinkElement']?.type).toBe('text/css')
        expect(loader['themeLinkElement']?.rel).toBe('stylesheet')
        expect(loader['themeLinkElement']?.media).toBe('screen,print')
        expect(appendChildSpy).toHaveBeenCalledWith(loader['themeLinkElement'])
    })

    it('should update existing style element when setting a theme', () => {
        const loader: HighlightLoader = TestBed.inject(HighlightLoader)

        loader.setTheme('https://initial-theme-path.css/')

        const diffPath: string = 'https://different-theme-path.css/'

        loader.setTheme(diffPath)
        expect(loader['themeLinkElement']?.href).toBe(diffPath)
    })

    it('should load a new style element when setting a theme if no existing element', () => {
        const loader: HighlightLoader = TestBed.inject(HighlightLoader)

        const path: string = 'https://path-to-theme.css/'
        spyOn(loader as any, 'loadTheme')

        loader.setTheme(path)

        expect((loader as any).loadTheme).toHaveBeenCalledWith(path)
    })

    it('should load theme on init if themePath option is provided', () => {
        const themePath: string = 'https://path-to-theme.css/'
        TestBed.overrideProvider(NXT_HIGHLIGHT_OPTIONS, {
            useValue: {
                themePath: 'https://path-to-theme.css/'
            } as HighlightJSOptions
        })

        const loader: HighlightLoader = TestBed.inject(HighlightLoader)

        expect(loader['themeLinkElement']).toBeTruthy()
        expect(loader['themeLinkElement']?.href).toBe(themePath)
        expect(loader['themeLinkElement']?.type).toBe('text/css')
        expect(loader['themeLinkElement']?.rel).toBe('stylesheet')
        expect(loader['themeLinkElement']?.media).toBe('screen,print')
    })

    it('should override the default config of highlight.js', async () => {
        TestBed.overrideProvider(NXT_HIGHLIGHT_OPTIONS, {
            useValue: {
                fullLibraryLoader,
                highlightOptions: {
                    languages: ['ts', 'html']
                }
            } as HighlightJSOptions
        })
        const configureSpy: jasmine.Spy = spyOn(hljs, 'configure')
        const loader: HighlightLoader = TestBed.inject(HighlightLoader)
        await loader.ready
        expect(configureSpy).toHaveBeenCalledWith({
            languages: ['ts', 'html']
        })
    })
})
