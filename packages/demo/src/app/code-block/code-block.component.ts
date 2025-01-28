import { CommonModule } from '@angular/common'
import { Component, Input, ViewEncapsulation } from '@angular/core'
import { TooltipDirective, TooltipModule } from 'ngx-bootstrap/tooltip'
import { HighlightModule } from 'nxt-highlightjs'
import { ClipboardDirective } from './clipboard.directive'

@Component({
    selector: 'app-code-block',
    imports: [
        CommonModule,
        ClipboardDirective,
        HighlightModule,
        TooltipModule
    ],
    templateUrl: './code-block.component.html',
    styleUrls: ['./code-block.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CodeBlockComponent {

    @Input() code?: string

    @Input() copy = true

    @Input() languages?: string[]

    private ts?: any

    show(tooltip: TooltipDirective) {
        tooltip.show()
        clearTimeout(this.ts)
        this.ts = setTimeout(() => tooltip.hide(), 1000)
    }
}
