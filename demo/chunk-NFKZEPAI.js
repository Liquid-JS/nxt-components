import"./chunk-FBFWB55K.js";var e=`import { JsonPipe } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { SortablejsDirective } from 'nxt-sortablejs'\r
import { Options } from 'sortablejs'\r
import { CodeBlockComponent } from '../../../code-block/code-block.component'\r
\r
@Component({\r
    selector: 'app-complex-example',\r
    templateUrl: './complex-example.component.html',\r
    styleUrls: ['./complex-example.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [
        SortablejsDirective,
        CodeBlockComponent,
        JsonPipe
    ]\r
})\r
export class ComplexExampleComponent {\r
    list1 = [\r
        '1',\r
        '2',\r
        '3',\r
        '4',\r
        '5'\r
    ]\r
\r
    list2 = [\r
        '6',\r
        '7',\r
        '8',\r
        '9',\r
        '10'\r
    ]\r
\r
    list3 = [\r
        '11',\r
        '12'\r
    ]\r
\r
    list4 = [\r
        '13'\r
    ]\r
\r
    list1Options: Options = {\r
        group: {\r
            name: 'group1',\r
            put: false\r
        }\r
    }\r
\r
    list2Options: Options = {\r
        group: {\r
            name: 'group2',\r
            put: ['group1', 'group2']\r
        }\r
    }\r
\r
    list3Options: Options = {\r
        group: {\r
            name: 'group2',\r
            pull: 'clone',\r
            put: ['group1', 'group2'],\r
            revertClone: true\r
        }\r
    }\r
\r
    list4Options: Options = {\r
        group: {\r
            name: 'group2',\r
            put: ['group1']\r
        }\r
    }\r
}\r
`;export{e as default};
