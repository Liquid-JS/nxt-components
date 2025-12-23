import"./chunk-FBFWB55K.js";var e=`import { Component, ViewEncapsulation } from '@angular/core'\r
import { HighlightDirective } from 'nxt-highlightjs'\r
import { Gist, GistDirective, GistFilePipe } from 'nxt-highlightjs/extras'\r
\r
@Component({\r
    selector: 'app-gist-file',\r
    imports: [
        GistDirective,
        GistFilePipe,
        HighlightDirective
    ],\r
    templateUrl: './gist-file.component.html',\r
    styleUrl: './gist-file.component.scss',\r
    encapsulation: ViewEncapsulation.Emulated\r
})\r
export class GistFileComponent {\r
\r
    gistId = '745149f6fc352f9036908ffe99054578'\r
    gist?: Gist\r
    error?: Error\r
    loading = true\r
\r
}\r
`;export{e as default};
