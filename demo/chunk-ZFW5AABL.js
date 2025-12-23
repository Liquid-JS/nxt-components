import"./chunk-FBFWB55K.js";var i=`import { Component, ViewEncapsulation } from '@angular/core'\r
import { FormsModule } from '@angular/forms'\r
import { DateTimeComponent, DateTimeInputDirective, DateTimeTriggerDirective } from 'nxt-pick-datetime'\r
\r
@Component({\r
    selector: 'app-invalid-input',\r
    templateUrl: './invalid-input.component.html',\r
    styleUrls: ['./invalid-input.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [
        DateTimeTriggerDirective,
        DateTimeInputDirective,
        DateTimeComponent,
        FormsModule
    ]\r
})\r
export class InvalidInputComponent {\r
    value = new Date()\r
}\r
`;export{i as default};
