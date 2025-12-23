import { AfterViewChecked, Component, inject, ViewEncapsulation, input, linkedSignal } from '@angular/core'
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
    readonly data = input<any>()
    /** Initial number of levels to be expanded; to expand / collapse the view after initial render, use `expandTo` / `collapseTo` */
    readonly levelOpen = input<number>()
    readonly _levelOpen = linkedSignal({
        source: () => this.levelOpen(),
        computation: level => level
    })
    /** Custom labels for elements within the hierarcy */
    readonly levelLabels = input<LevelLabels>()

    private readonly expanderService = inject(ExpanderService)

    ngAfterViewChecked(): void {
        if (this._levelOpen() != undefined) {
            // Reset levelOpen to keep nested items collapsed when toggling
            this._levelOpen.set(undefined)
        }
    }

    /** Expand all items up to the given level */
    expandTo(level: number) {
        this._levelOpen.set(level)
        this.expanderService.expandTo(level)
    }

    /** Collapse any open items above the given level */
    collapseTo(level: number) {
        this.expanderService.collapseTo(level)
    }
}
