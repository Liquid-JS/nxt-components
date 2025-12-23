import"./chunk-FBFWB55K.js";var t=`import { JsonPipe } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { SortablejsDirective } from 'nxt-sortablejs'\r
import { Options } from 'sortablejs'\r
import { CodeBlockComponent } from '../../../code-block/code-block.component'\r
\r
@Component({\r
    selector: 'app-disabled-options',\r
    templateUrl: './disabled-options.component.html',\r
    styleUrls: ['./disabled-options.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [
        SortablejsDirective,
        CodeBlockComponent,
        JsonPipe
    ]\r
})\r
export class DisabledOptionsComponent {\r
    draggableItems = [\r
        { draggable: true, text: '1' },\r
        { draggable: true, text: '2' },\r
        { draggable: false, text: '3' },\r
        { draggable: true, text: '4' },\r
        { draggable: true, text: '5' }\r
    ]\r
\r
    draggableOptions: Options = {\r
        draggable: '.draggable'\r
    }\r
}\r
`;export{t as default};
