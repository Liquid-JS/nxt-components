import { ChangeDetectorRef, Component, inject, ViewEncapsulation } from '@angular/core'
import { SortablejsDirective } from 'nxt-sortablejs'
import { Options } from 'sortablejs'

@Component({
    selector: 'app-scrolling-options',
    templateUrl: './scrolling-options.component.html',
    styleUrls: ['./scrolling-options.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        SortablejsDirective
    ]
})
export class ScrollingOptionsComponent {
    private readonly cdRef = inject(ChangeDetectorRef)

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
}
