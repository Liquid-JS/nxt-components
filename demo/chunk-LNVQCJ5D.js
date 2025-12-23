import"./chunk-FBFWB55K.js";var a=`import { DatePipe } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { FormsModule } from '@angular/forms'\r
import { DateTimeComponent, DateTimeInputDirective, DateTimeTriggerDirective } from 'nxt-pick-datetime'\r
\r
@Component({\r
    selector: 'app-validate-min-max',\r
    templateUrl: './min-max.component.html',\r
    styleUrls: ['./min-max.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        DateTimeTriggerDirective,\r
        DateTimeInputDirective,\r
        DateTimeComponent,\r
        FormsModule,\r
        DatePipe\r
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
