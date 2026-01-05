import"./chunk-FBFWB55K.js";var i=`import { Component, ViewEncapsulation } from '@angular/core'\r
import { HighlightDirective } from 'nxt-highlightjs'\r
import { fileResource } from 'nxt-highlightjs/extras'\r
import filePath from './file.txt'\r
\r
@Component({\r
    selector: 'app-file',\r
    imports: [\r
        HighlightDirective\r
    ],\r
    templateUrl: './file.component.html',\r
    styleUrl: './file.component.scss',\r
    encapsulation: ViewEncapsulation.Emulated\r
})\r
export class FileComponent {\r
\r
    readonly file = fileResource(filePath, { formatUrl: true })\r
\r
}\r
`;export{i as default};
