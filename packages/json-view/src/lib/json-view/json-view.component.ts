import { AfterViewChecked, ChangeDetectorRef, Component, inject, Input, ViewEncapsulation } from '@angular/core'
import { LevelLabels } from '../utils/interfaces'
import { ExpanderService } from '../expander/expander.service'
import { JsonViewItemComponent } from '../json-view-item/json-view-item.component'

@Component({
    selector: 'nxt-json-view',
    templateUrl: './json-view.component.html',
    styleUrls: ['./json-view.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    providers: [
        {
            provide: ExpanderService,
            useClass: ExpanderService
        }
    ],
    imports: [
        JsonViewItemComponent
    ]
})
export class JsonViewComponent implements AfterViewChecked {
    /** JSON data, any valid JSON object */
    @Input() data: any
    /** Initial number of levels to be expanded; to expand / collapse the view after initial render, use `expandTo` / `collapseTo` */
    @Input() levelOpen?: number
    /** Custom labels for elements within the hierarcy */
    @Input() levelLabels?: LevelLabels

    private readonly expanderService = inject(ExpanderService)
    private readonly cdRef = inject(ChangeDetectorRef)

    ngAfterViewChecked(): void {
        if (this.levelOpen != undefined) {
            // Reset levelOpen to keep nested items collapsed when toggling
            this.levelOpen = undefined
            this.cdRef.detectChanges()
        }
    }

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
