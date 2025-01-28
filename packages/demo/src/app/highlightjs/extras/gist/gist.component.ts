import { KeyValuePipe, NgClass } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HighlightAutoDirective } from 'nxt-highlightjs'
import { Gist, GistDirective, GistFilePipe } from 'nxt-highlightjs/extras'

@Component({
    selector: 'app-gist',
    imports: [
        GistDirective,
        GistFilePipe,
        HighlightAutoDirective,
        KeyValuePipe,
        FormsModule,
        NgClass
    ],
    templateUrl: './gist.component.html',
    styleUrl: './gist.component.scss',
    encapsulation: ViewEncapsulation.Emulated
})
export class GistComponent {

    gistId = '745149f6fc352f9036908ffe99054578'
    gist?: Gist
    error?: Error
    loading = true

    selectedFile?: string

    setGist(gist: Gist) {
        this.gist = gist
        if (this.selectedFile && this.selectedFile in gist.files)
            return

        this.selectedFile = Object.keys(gist.files)[0]
        this.loading = false
    }

}
