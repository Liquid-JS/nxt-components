import"./chunk-FBFWB55K.js";var e=`import { NgClass } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { HighlightAutoDirective } from 'nxt-highlightjs'\r
import { Gist, GistDirective, GistFilePipe } from 'nxt-highlightjs/extras'\r
\r
@Component({\r
    selector: 'app-gist-file',\r
    imports: [\r
        GistDirective,\r
        GistFilePipe,\r
        HighlightAutoDirective,\r
        NgClass\r
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
