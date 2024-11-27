import"./chunk-2R6CW7ES.js";var n=`import { CommonModule } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { FormsModule } from '@angular/forms'\r
import { DateTimeModule } from 'nxt-pick-datetime'\r
\r
@Component({\r
    selector: 'app-range',\r
    templateUrl: './range.component.html',\r
    styleUrls: ['./range.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        DateTimeModule,\r
        FormsModule,\r
        CommonModule\r
    ]\r
})\r
export class RangeComponent {\r
    value = [\r
        new Date(), // from = now\r
        new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // to = now - 2 days, resulting in an invalid range\r
    ]\r
}\r
`;export{n as default};
