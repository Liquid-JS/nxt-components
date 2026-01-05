import { KeyValuePipe } from '@angular/common'
import { Component, computed, linkedSignal, ViewEncapsulation } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HighlightDirective } from 'nxt-highlightjs'
import { Gist, GistFilePipe, gistResource } from 'nxt-highlightjs/extras'

@Component({
    selector: 'app-gist',
    imports: [
        GistFilePipe,
        HighlightDirective,
        KeyValuePipe,
        FormsModule
    ],
    templateUrl: './gist.component.html',
    styleUrl: './gist.component.scss',
    encapsulation: ViewEncapsulation.Emulated
})
export class GistComponent {

    readonly gistId = '745149f6fc352f9036908ffe99054578'
    readonly gist = gistResource(this.gistId)

    readonly selectedFile = linkedSignal<Gist | undefined, string | undefined>({
        source: () => this.gist.hasValue() ? this.gist.value() : undefined,
        computation: (gist, prev) => {
            if (!gist || ((prev?.value && prev.value in gist.files)))
                return prev?.value

            return Object.keys(gist.files)[0]
        }
    })

    readonly extName = computed(() => this.selectedFile()?.split('.').reverse()[0] ?? '')

}
