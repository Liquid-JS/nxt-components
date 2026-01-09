import { Component, ViewEncapsulation, input } from '@angular/core'
import { TooltipDirective, TooltipModule } from 'ngx-bootstrap/tooltip'
import { HighlightAutoDirective } from 'nxt-highlightjs'
import { ClipboardDirective } from './clipboard.directive'

@Component({
    selector: 'app-code-block',
    imports: [
        ClipboardDirective,
        HighlightAutoDirective,
        TooltipModule
    ],
    templateUrl: './code-block.component.html',
    styleUrls: ['./code-block.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CodeBlockComponent {

    readonly code = input<string>()

    readonly copy = input<boolean>(true)

    readonly languages = input<string[]>()

    private ts?: any

    show(tooltip: TooltipDirective) {
        tooltip.show()
        clearTimeout(this.ts)
        this.ts = setTimeout(() => tooltip.hide(), 1000)
    }
}
