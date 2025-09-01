import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core'
import { SortablejsModule } from 'nxt-sortablejs'
import { Options } from 'sortablejs'

@Component({
    selector: 'app-scrolling-options',
    templateUrl: './scrolling-options.component.html',
    styleUrls: ['./scrolling-options.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        SortablejsModule
    ],
    // Prevent lag when working with large number of items
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollingOptionsComponent {
    scrollableItems = Array.from({ length: 30 })
        .map((_, i) => i + 1)

    scrollableOptions: Options = {
        scroll: true,
        scrollSensitivity: 100,
        // Most browsers handle scrolling well, this forces custom scrolling which uses `scrollSensitivity`
        forceAutoScrollFallback: true,
        onUpdate: () => {
            // Detect changes only when neccesary
            this.cdRef.detectChanges()
        }
    }

    constructor(
        private readonly cdRef: ChangeDetectorRef
    ) { }
}
