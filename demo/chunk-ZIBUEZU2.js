import"./chunk-FBFWB55K.js";var n=`import { JsonPipe } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { SortablejsDirective } from 'nxt-sortablejs'\r
import { Options } from 'sortablejs'\r
import { CodeBlockComponent } from '../../../code-block/code-block.component'\r
\r
@Component({\r
    selector: 'app-item-clone',\r
    templateUrl: './item-clone.component.html',\r
    styleUrls: ['./item-clone.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [
        SortablejsDirective,
        CodeBlockComponent,
        JsonPipe
    ]\r
})\r
export class ItemCloneComponent {\r
    cloneList1 = [\r
        '1',\r
        '2',\r
        '3',\r
        '4',\r
        '5'\r
    ]\r
\r
    cloneList2 = [\r
        '6',\r
        '7',\r
        '8',\r
        '9',\r
        '10'\r
    ]\r
\r
    clone1Options: Options = {\r
        group: {\r
            name: 'clone-group',\r
            pull: 'clone',\r
            put: false\r
        }\r
    }\r
\r
    clone2Options: Options = {\r
        group: 'clone-group'\r
    }\r
}\r
`;export{n as default};
