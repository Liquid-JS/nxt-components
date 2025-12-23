import"./chunk-FBFWB55K.js";var t=`import { AsyncPipe } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { HighlightDirective } from 'nxt-highlightjs'\r
import { CodeFromUrlPipe } from 'nxt-highlightjs/extras'\r
import filePath from './file.txt'\r
\r
@Component({\r
    selector: 'app-file',\r
    imports: [\r
        CodeFromUrlPipe,\r
        HighlightDirective,\r
        AsyncPipe\r
    ],\r
    templateUrl: './file.component.html',\r
    styleUrl: './file.component.scss',\r
    encapsulation: ViewEncapsulation.Emulated\r
})\r
export class FileComponent {\r
\r
    filePath = filePath\r
\r
}\r
`;export{t as default};
