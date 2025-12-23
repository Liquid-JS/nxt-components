import"./chunk-FBFWB55K.js";var t=`import { CdkTableModule } from '@angular/cdk/table'\r
\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { SortablejsDirective } from 'nxt-sortablejs'\r
\r
@Component({\r
    selector: 'app-table',\r
    templateUrl: './table.component.html',\r
    styleUrls: ['./table.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        SortablejsDirective,\r
        CdkTableModule\r
    ]\r
})\r
export class TableComponent {\r
    cities = [\r
        'Ankara',\r
        'Moscow',\r
        'Munich',\r
        'Paris',\r
        'Washington'\r
    ]\r
}\r
`;export{t as default};
