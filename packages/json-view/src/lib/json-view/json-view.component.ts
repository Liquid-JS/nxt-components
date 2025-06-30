import { Component, inject, Input, ViewEncapsulation } from '@angular/core'
import { LevelLabels } from '../utils/interfaces'
import { ExpanderService } from '../expander/expander.service'

@Component({
    selector: 'nxt-json-view',
    templateUrl: './json-view.component.html',
    styleUrls: ['./json-view.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    standalone: false,
    providers: [
        {
            provide: ExpanderService,
            useClass: ExpanderService
        }
    ]
})
export class JsonViewComponent {
    /** JSON data, any valid JSON object */
    @Input() data: any
    /** Initial number of levels to be expanded; to expand / collapse the view after initial render, use `expandTo` / `collapseTo` */
    @Input() levelOpen?: number
    /** Custom labels for elements within the hierarcy */
    @Input() levelLabels?: LevelLabels

    private readonly expanderService = inject(ExpanderService)

    /** Expand all items up to the given level */
    expandTo(level: number) {
        this.levelOpen = level
        this.expanderService.expandTo(level)
    }

    /** Collapse any open items above the given level */
    collapseTo(level: number) {
        this.expanderService.collapseTo(level)
    }
}
