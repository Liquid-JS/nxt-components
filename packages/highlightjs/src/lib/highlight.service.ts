import { Injectable, inject } from '@angular/core'

import { HighlightLoader } from './highlight.loader'

@Injectable({
    providedIn: 'root'
})
export class HighlightJS {

    private readonly loader = inject(HighlightLoader)

    readonly hljs = this.loader.hljs.value

}
