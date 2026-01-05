import"./chunk-FBFWB55K.js";var e=`import { Component, ViewEncapsulation } from '@angular/core'\r
import { HighlightDirective } from 'nxt-highlightjs'\r
import { GistFilePipe, gistResource } from 'nxt-highlightjs/extras'\r
\r
@Component({\r
    selector: 'app-gist-file',\r
    imports: [\r
        GistFilePipe,\r
        HighlightDirective\r
    ],\r
    templateUrl: './gist-file.component.html',\r
    styleUrl: './gist-file.component.scss',\r
    encapsulation: ViewEncapsulation.Emulated\r
})\r
export class GistFileComponent {\r
\r
    readonly gistId = '745149f6fc352f9036908ffe99054578'\r
    readonly gist = gistResource(this.gistId)\r
\r
}\r
`;export{e as default};
