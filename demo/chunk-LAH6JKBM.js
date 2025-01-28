import"./chunk-FBFWB55K.js";var t=`import { KeyValuePipe, NgClass } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { FormsModule } from '@angular/forms'\r
import { HighlightDirective } from 'nxt-highlightjs'\r
import { Gist, GistDirective, GistFilePipe } from 'nxt-highlightjs/extras'\r
\r
@Component({\r
    selector: 'app-gist',\r
    imports: [\r
        GistDirective,\r
        GistFilePipe,\r
        HighlightDirective,\r
        KeyValuePipe,\r
        FormsModule,\r
        NgClass\r
    ],\r
    templateUrl: './gist.component.html',\r
    styleUrl: './gist.component.scss',\r
    encapsulation: ViewEncapsulation.Emulated\r
})\r
export class GistComponent {\r
\r
    gistId = '745149f6fc352f9036908ffe99054578'\r
    gist?: Gist\r
    error?: Error\r
    loading = true\r
\r
    selectedFile?: string\r
\r
    setGist(gist: Gist) {\r
        this.gist = gist\r
        if (this.selectedFile && this.selectedFile in gist.files)\r
            return\r
\r
        this.selectedFile = Object.keys(gist.files)[0]\r
        this.loading = false\r
    }\r
\r
    extName(file?: string) {\r
        return file?.split('.').reverse()[0]\r
    }\r
\r
}\r
`;export{t as default};
