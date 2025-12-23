import"./chunk-FBFWB55K.js";var n=`import { JsonPipe } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { SortablejsDirective } from 'nxt-sortablejs'\r
import { CodeBlockComponent } from '../../../code-block/code-block.component'\r
\r
@Component({\r
    selector: 'app-union-example',\r
    templateUrl: './union-example.component.html',\r
    styleUrls: ['./union-example.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [
        SortablejsDirective,
        CodeBlockComponent,
        JsonPipe
    ]\r
})\r
export class UnionExampleComponent {\r
    readonly elems = [\r
        1,\r
        2,\r
        [3, 4]\r
    ]\r
    readonly isArray = Array.isArray\r
}\r
`;export{n as default};
