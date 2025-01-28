import { AsyncPipe } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'
import { HighlightDirective } from 'nxt-highlightjs'
import { CodeFromUrlPipe, GistOptions, NXT_GIST_OPTIONS } from 'nxt-highlightjs/extras'
import filePath from './file.txt'

@Component({
    selector: 'app-file',
    imports: [
        CodeFromUrlPipe,
        HighlightDirective,
        AsyncPipe
    ],
    providers: [{
        provide: NXT_GIST_OPTIONS,
        useValue: {

        } as GistOptions
    }],
    templateUrl: './file.component.html',
    styleUrl: './file.component.scss',
    encapsulation: ViewEncapsulation.Emulated
})
export class FileComponent {

    filePath = filePath

}
