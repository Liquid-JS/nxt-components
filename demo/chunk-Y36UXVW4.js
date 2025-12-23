import"./chunk-FBFWB55K.js";var t=`import { Component, ViewEncapsulation } from '@angular/core'\r
import { FormsModule } from '@angular/forms'\r
import { HighlightAutoDirective, HighlightJS, HighlightJSOptions, HighlightLoader, NXT_HIGHLIGHT_OPTIONS } from 'nxt-highlightjs'\r
import { HighlightLineNumbersDirective } from 'nxt-highlightjs/line-numbers'\r
import { languages, themes } from './helpers'\r
\r
@Component({\r
    selector: 'app-basic-example',\r
    templateUrl: './basic-example.component.html',\r
    styleUrls: ['./basic-example.component.scss'],\r
    encapsulation: ViewEncapsulation.None,\r
    imports: [\r
        FormsModule,\r
        HighlightAutoDirective,\r
        HighlightLineNumbersDirective\r
    ],\r
    providers: [\r
        {\r
            provide: NXT_HIGHLIGHT_OPTIONS,\r
            useValue: {\r
                fullLibraryLoader: () => import('highlight.js').then(r => r.default),\r
                lineNumbersLoader: () => import('nxt-highlightjs/line-numbers')\r
            } as HighlightJSOptions\r
        },\r
        {\r
            provide: HighlightLoader,\r
            useClass: HighlightLoader\r
        },\r
        {\r
            provide: HighlightJS,\r
            useClass: HighlightJS\r
        }\r
    ]\r
})\r
export class BasicExampleComponent {\r
\r
    readonly themes = themes\r
    readonly languages = languages\r
\r
    theme = 'androidstudio'\r
    language = 'typescript'\r
    lineNumbers = false\r
\r
    code = ''\r
\r
}\r
`;export{t as default};
