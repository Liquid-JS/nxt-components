import"./chunk-2R6CW7ES.js";var t=`import { CommonModule } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { SortablejsModule } from 'nxt-sortablejs'\r
import { Options } from 'sortablejs'\r
import { CodeBlockComponent } from '../../../code-block/code-block.component'\r
\r
@Component({\r
    selector: 'app-events',\r
    templateUrl: './events.component.html',\r
    styleUrls: ['./events.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        SortablejsModule,\r
        CodeBlockComponent,\r
        CommonModule\r
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
