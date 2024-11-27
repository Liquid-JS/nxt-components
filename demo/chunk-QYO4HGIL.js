import"./chunk-2R6CW7ES.js";var s=`import { CommonModule } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { SortablejsModule } from 'nxt-sortablejs'\r
import { Options } from 'sortablejs'\r
\r
@Component({\r
    selector: 'app-scrolling-options',\r
    templateUrl: './scrolling-options.component.html',\r
    styleUrls: ['./scrolling-options.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        SortablejsModule,\r
        CommonModule\r
    ]\r
})\r
export class ScrollingOptionsComponent {\r
    scrollableItems = Array.from({ length: 30 })\r
        .map((_, i) => i + 1)\r
\r
    scrollableOptions: Options = {\r
        scroll: true,\r
        scrollSensitivity: 100,\r
        // @ts-ignore Most browsers handle scrolling well, this forces custom scrolling which uses \`scrollSensitivity\`\r
        forceAutoScrollFallback: true\r
    }\r
}\r
`;export{s as default};
