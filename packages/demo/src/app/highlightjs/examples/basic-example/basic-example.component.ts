import { Component, ViewEncapsulation } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HighlightAutoDirective, HighlightJS, HighlightJSOptions, HighlightLoader, NXT_HIGHLIGHT_OPTIONS } from 'nxt-highlightjs'
import { HighlightLineNumbersDirective } from 'nxt-highlightjs/line-numbers'
import { languages, themes } from './helpers'

@Component({
    selector: 'app-basic-example',
    templateUrl: './basic-example.component.html',
    styleUrls: ['./basic-example.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [
        FormsModule,
        HighlightAutoDirective,
        HighlightLineNumbersDirective
    ],
    providers: [
        {
            provide: NXT_HIGHLIGHT_OPTIONS,
            useValue: {
                fullLibraryLoader: () => import('highlight.js').then(r => r.default),
                lineNumbersLoader: () => import('nxt-highlightjs/line-numbers')
            } as HighlightJSOptions
        },
        {
            provide: HighlightLoader,
            useClass: HighlightLoader
        },
        {
            provide: HighlightJS,
            useClass: HighlightJS
        }
    ]
})
export class BasicExampleComponent {

    readonly themes = themes
    readonly languages = languages

    theme = 'androidstudio'
    language = 'typescript'
    lineNumbers = false

    code = ''

}
