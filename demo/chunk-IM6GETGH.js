import"./chunk-FBFWB55K.js";var e=`import { AsyncPipe } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { HighlightAutoDirective } from 'nxt-highlightjs'\r
import { CodeFromUrlPipe, GistOptions, NXT_GIST_OPTIONS } from 'nxt-highlightjs/extras'\r
import filePath from './file.txt'\r
\r
@Component({\r
    selector: 'app-file',\r
    imports: [\r
        CodeFromUrlPipe,\r
        HighlightAutoDirective,\r
        AsyncPipe\r
    ],\r
    providers: [{\r
        provide: NXT_GIST_OPTIONS,\r
        useValue: {\r
\r
        } as GistOptions\r
    }],\r
    templateUrl: './file.component.html',\r
    styleUrl: './file.component.scss',\r
    encapsulation: ViewEncapsulation.Emulated\r
})\r
export class FileComponent {\r
\r
    filePath = filePath\r
\r
}\r
`;export{e as default};
