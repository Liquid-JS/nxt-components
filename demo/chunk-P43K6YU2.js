import"./chunk-FBFWB55K.js";var a=`import { CommonModule } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { FormsModule } from '@angular/forms'\r
import { DateFilter, DateTimeModule } from 'nxt-pick-datetime'\r
\r
const lastSunday = new Date()\r
lastSunday.setDate(lastSunday.getDate() - lastSunday.getDay())\r
\r
@Component({\r
    selector: 'app-filter',\r
    templateUrl: './filter.component.html',\r
    styleUrls: ['./filter.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        DateTimeModule,\r
        FormsModule,\r
        CommonModule\r
    ]\r
})\r
export class FilterComponent {\r
    value = lastSunday\r
\r
    dateTimeFilter: DateFilter<Date> = (date) => {\r
        // Don't allow Sundays\r
        if (date?.getDay() == 0)\r
            return false\r
\r
        return true\r
    }\r
}\r
`;export{a as default};
