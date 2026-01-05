import"./chunk-FBFWB55K.js";var t=`import { KeyValuePipe } from '@angular/common'\r
import { Component, computed, linkedSignal, ViewEncapsulation } from '@angular/core'\r
import { FormsModule } from '@angular/forms'\r
import { HighlightDirective } from 'nxt-highlightjs'\r
import { Gist, GistFilePipe, gistResource } from 'nxt-highlightjs/extras'\r
\r
@Component({\r
    selector: 'app-gist',\r
    imports: [\r
        GistFilePipe,\r
        HighlightDirective,\r
        KeyValuePipe,\r
        FormsModule\r
    ],\r
    templateUrl: './gist.component.html',\r
    styleUrl: './gist.component.scss',\r
    encapsulation: ViewEncapsulation.Emulated\r
})\r
export class GistComponent {\r
\r
    readonly gistId = '745149f6fc352f9036908ffe99054578'\r
    readonly gist = gistResource(this.gistId)\r
\r
    readonly selectedFile = linkedSignal<Gist | undefined, string | undefined>({\r
        source: () => this.gist.hasValue() ? this.gist.value() : undefined,\r
        computation: (gist, prev) => {\r
            if (!gist || ((prev?.value && prev.value in gist.files)))\r
                return prev?.value\r
\r
            return Object.keys(gist.files)[0]\r
        }\r
    })\r
\r
    readonly extName = computed(() => this.selectedFile()?.split('.').reverse()[0] ?? '')\r
\r
}\r
`;export{t as default};
