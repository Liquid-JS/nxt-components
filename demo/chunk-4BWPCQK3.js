import"./chunk-FBFWB55K.js";var o=`import { Component, ViewEncapsulation } from '@angular/core'\r
import { FormsModule } from '@angular/forms'\r
import { DateTimeComponent, DateTimeInputDirective, DateTimeTriggerDirective } from 'nxt-pick-datetime'\r
\r
@Component({\r
    selector: 'app-calendar-only',\r
    templateUrl: './calendar-only.component.html',\r
    styleUrls: ['./calendar-only.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        DateTimeTriggerDirective,\r
        DateTimeInputDirective,\r
        DateTimeComponent,\r
        FormsModule\r
    ]\r
})\r
export class CalendarOnlyComponent {\r
    date?: Date\r
}\r
`;export{o as default};
