import"./chunk-FBFWB55K.js";var e=`import { CommonModule } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { DateTimeModule } from 'nxt-pick-datetime'

@Component({
    selector: 'app-invalid-input',
    templateUrl: './invalid-input.component.html',
    styleUrls: ['./invalid-input.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        DateTimeModule,
        FormsModule,
        CommonModule
    ]
})
export class InvalidInputComponent {
    value = new Date()
}
`;export{e as default};
