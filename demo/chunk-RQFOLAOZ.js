import"./chunk-FBFWB55K.js";var o=`import { Component, ViewEncapsulation } from '@angular/core'\r
import { FormsModule } from '@angular/forms'\r
import { DateTimeComponent, DateTimeInputDirective, DateTimeTriggerDirective } from 'nxt-pick-datetime'\r
\r
@Component({\r
    selector: 'app-trigger-icon',\r
    templateUrl: './trigger-icon.component.html',\r
    styleUrls: ['./trigger-icon.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        DateTimeTriggerDirective,\r
        DateTimeInputDirective,\r
        DateTimeComponent,\r
        FormsModule\r
    ]\r
})\r
export class TriggerIconComponent {\r
    date?: Date\r
}\r
`;export{o as default};
