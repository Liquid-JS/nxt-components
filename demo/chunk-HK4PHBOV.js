import"./chunk-FBFWB55K.js";var n=`import { JsonPipe } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { SortablejsDirective } from 'nxt-sortablejs'\r
import { Options } from 'sortablejs'\r
import { CodeBlockComponent } from '../../../code-block/code-block.component'\r
\r
@Component({\r
    selector: 'app-transfer-lists',\r
    templateUrl: './transfer-lists.component.html',\r
    styleUrls: ['./transfer-lists.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        SortablejsDirective,\r
        CodeBlockComponent,\r
        JsonPipe\r
    ]\r
})\r
export class TransferListsComponent {\r
    normalList1 = [\r
        '1',\r
        '2',\r
        '3',\r
        '4',\r
        '5'\r
    ]\r
\r
    normalList2 = [\r
        '6',\r
        '7',\r
        '8',\r
        '9',\r
        '10'\r
    ]\r
\r
    normalOptions: Options = {\r
        group: 'normal-group'\r
    }\r
}\r
`;export{n as default};
