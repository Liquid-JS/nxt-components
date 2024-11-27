import"./chunk-2R6CW7ES.js";var o=`import { Component, ViewEncapsulation } from '@angular/core'\r
import { FormsModule } from '@angular/forms'\r
import { DateTimeModule } from 'nxt-pick-datetime'\r
\r
@Component({\r
    selector: 'app-filter-restriction',\r
    templateUrl: './filter-restriction.component.html',\r
    styleUrls: ['./filter-restriction.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        DateTimeModule,\r
        FormsModule\r
    ]\r
})\r
export class FilterRestrictionComponent {\r
    date?: Date\r
    filter = (d?: Date) => {\r
        const day = d?.getDay()\r
        // Prevent Saturday and Sunday from being selected.\r
        return day !== 0 && day !== 6\r
    }\r
}\r
`;export{o as default};
