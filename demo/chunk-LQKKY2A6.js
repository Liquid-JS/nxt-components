import"./chunk-FBFWB55K.js";var e=`import { CommonModule } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { FormsModule } from '@angular/forms'\r
import { DateTimeModule } from 'nxt-pick-datetime'\r
\r
@Component({\r
    selector: 'app-invalid-input',\r
    templateUrl: './invalid-input.component.html',\r
    styleUrls: ['./invalid-input.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        DateTimeModule,\r
        FormsModule,\r
        CommonModule\r
    ]\r
})\r
export class InvalidInputComponent {\r
    value = new Date()\r
}\r
`;export{e as default};
