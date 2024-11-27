import { CommonModule } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'
import { SortablejsModule } from 'nxt-sortablejs'
import { Options } from 'sortablejs'

@Component({
    selector: 'app-scrolling-options',
    templateUrl: './scrolling-options.component.html',
    styleUrls: ['./scrolling-options.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        SortablejsModule,
        CommonModule
    ]
})
export class ScrollingOptionsComponent {
    scrollableItems = Array.from({ length: 30 })
        .map((_, i) => i + 1)

    scrollableOptions: Options = {
        scroll: true,
        scrollSensitivity: 100,
        // @ts-ignore Most browsers handle scrolling well, this forces custom scrolling which uses `scrollSensitivity`
        forceAutoScrollFallback: true
    }
}
