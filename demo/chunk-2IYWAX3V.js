import"./chunk-FBFWB55K.js";var r=`import { Component, ViewEncapsulation } from '@angular/core'\r
import { FormsModule } from '@angular/forms'\r
import { DateTimeComponent, DateTimeInputDirective, DateTimeTriggerDirective } from 'nxt-pick-datetime'\r
\r
@Component({\r
    selector: 'app-filter-restriction',\r
    templateUrl: './filter-restriction.component.html',\r
    styleUrls: ['./filter-restriction.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        DateTimeTriggerDirective,\r
        DateTimeInputDirective,\r
        DateTimeComponent,\r
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
`;export{r as default};
