import"./chunk-FBFWB55K.js";var t=`import { ChangeDetectorRef, Component, inject, ViewEncapsulation } from '@angular/core'\r
import { SortablejsDirective } from 'nxt-sortablejs'\r
import { Options } from 'sortablejs'\r
\r
@Component({\r
    selector: 'app-scrolling-options',\r
    templateUrl: './scrolling-options.component.html',\r
    styleUrls: ['./scrolling-options.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        SortablejsDirective\r
    ]\r
})\r
export class ScrollingOptionsComponent {\r
    private readonly cdRef = inject(ChangeDetectorRef)\r
\r
    scrollableItems = Array.from({ length: 30 })\r
        .map((_, i) => i + 1)\r
\r
    scrollableOptions: Options = {\r
        scroll: true,\r
        scrollSensitivity: 100,\r
        // Most browsers handle scrolling well, this forces custom scrolling which uses \`scrollSensitivity\`\r
        forceAutoScrollFallback: true,\r
        onUpdate: () => {\r
            // Detect changes only when neccesary\r
            this.cdRef.detectChanges()\r
        }\r
    }\r
}\r
`;export{t as default};
