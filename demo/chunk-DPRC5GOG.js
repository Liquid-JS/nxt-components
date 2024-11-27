import"./chunk-FBFWB55K.js";var a=`import { CommonModule } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { FormsModule } from '@angular/forms'\r
import { DateTimeModule } from 'nxt-pick-datetime'\r
\r
@Component({\r
    selector: 'app-validate-min-max',\r
    templateUrl: './min-max.component.html',\r
    styleUrls: ['./min-max.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        DateTimeModule,\r
        FormsModule,\r
        CommonModule\r
    ]\r
})\r
export class ValidateMinMaxComponent {\r
    value = new Date()\r
\r
    min = new Date(this.value.getTime() + 3 * 24 * 60 * 60 * 1000) // 2 days after value\r
\r
    max = new Date(this.value.getTime() - 3 * 24 * 60 * 60 * 1000) // 2 days before value\r
}\r
`;export{a as default};
