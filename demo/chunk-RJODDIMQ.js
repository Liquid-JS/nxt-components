import"./chunk-F5DYP4RK.js";var o=`import { Component, ViewEncapsulation } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { DateTimeComponent, DateTimeInputDirective, DateTimeTriggerDirective } from 'nxt-pick-datetime'

@Component({
    selector: 'app-trigger-icon',
    templateUrl: './trigger-icon.component.html',
    styleUrls: ['./trigger-icon.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        DateTimeTriggerDirective,
        DateTimeInputDirective,
        DateTimeComponent,
        FormsModule
    ]
})
export class TriggerIconComponent {
    date?: Date
}
`;export{o as default};
