import"./chunk-FBFWB55K.js";var a=`import { CdkTableModule } from '@angular/cdk/table'\r
import { CommonModule } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { SortablejsModule } from 'nxt-sortablejs'\r
\r
@Component({\r
    selector: 'app-table',\r
    templateUrl: './table.component.html',\r
    styleUrls: ['./table.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        SortablejsModule,\r
        CommonModule,\r
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
`;export{a as default};
