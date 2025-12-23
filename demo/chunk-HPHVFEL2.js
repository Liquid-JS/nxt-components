import"./chunk-FBFWB55K.js";var m=`import { Component, ViewEncapsulation } from '@angular/core'\r
import { FormsModule } from '@angular/forms'\r
import { DateTimeComponent, DateTimeInputDirective, DateTimeTriggerDirective } from 'nxt-pick-datetime'\r
\r
@Component({\r
    selector: 'app-min-max',\r
    templateUrl: './min-max.component.html',\r
    styleUrls: ['./min-max.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        DateTimeTriggerDirective,\r
        DateTimeInputDirective,\r
        DateTimeComponent,\r
        FormsModule\r
    ]\r
})\r
export class MinMaxComponent {\r
    date?: Date\r
    min = new Date(2018, 3, 12, 10, 30)\r
    max = new Date(2018, 3, 25, 20, 30)\r
    startAt = new Date(2018, 3, 18, 10, 30)\r
}\r
`;export{m as default};
