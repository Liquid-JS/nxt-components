import"./chunk-2R6CW7ES.js";var o=`import { Component, ViewEncapsulation } from '@angular/core'\r
import { FormsModule } from '@angular/forms'\r
import { DateTimeModule } from 'nxt-pick-datetime'\r
\r
@Component({\r
    selector: 'app-min-max',\r
    templateUrl: './min-max.component.html',\r
    styleUrls: ['./min-max.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        DateTimeModule,\r
        FormsModule\r
    ]\r
})\r
export class MinMaxComponent {\r
    date?: Date\r
    min = new Date(2018, 3, 12, 10, 30)\r
    max = new Date(2018, 3, 25, 20, 30)\r
    startAt = new Date(2018, 3, 18, 10, 30)\r
}\r
`;export{o as default};
