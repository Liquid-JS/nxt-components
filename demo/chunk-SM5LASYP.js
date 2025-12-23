import"./chunk-FBFWB55K.js";var t=`import { Component, ViewEncapsulation } from '@angular/core'\r
import { SortablejsDirective } from 'nxt-sortablejs'\r
import { Options } from 'sortablejs'\r
import { CodeBlockComponent } from '../../../code-block/code-block.component'\r
\r
@Component({\r
    selector: 'app-events',\r
    templateUrl: './events.component.html',\r
    styleUrls: ['./events.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        SortablejsDirective,\r
        CodeBlockComponent\r
    ]\r
})\r
export class EventsComponent {\r
    eventItems = [\r
        '1',\r
        '2',\r
        '3',\r
        '4',\r
        '5'\r
    ]\r
\r
    eventUpdateCounter = 0\r
\r
    eventOptions: Options = {\r
        onUpdate: () => this.eventUpdateCounter++\r
    }\r
}\r
`;export{t as default};
