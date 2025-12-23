import"./chunk-FBFWB55K.js";var n=`import { JsonPipe } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { SortablejsDirective } from 'nxt-sortablejs'\r
import { CodeBlockComponent } from '../../../code-block/code-block.component'\r
\r
@Component({\r
    selector: 'app-basic-example',\r
    templateUrl: './basic-example.component.html',\r
    styleUrls: ['./basic-example.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [
        SortablejsDirective,
        CodeBlockComponent,
        JsonPipe
    ]\r
})\r
export class BasicExampleComponent {\r
    cities = [\r
        'Ankara',\r
        'Moscow',\r
        'Munich',\r
        'Paris',\r
        'Washington'\r
    ]\r
}\r
`;export{n as default};
