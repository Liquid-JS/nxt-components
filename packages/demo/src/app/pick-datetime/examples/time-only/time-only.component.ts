import { Component, ViewEncapsulation } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { DateTimeComponent, DateTimeInputDirective, DateTimeTriggerDirective } from 'nxt-pick-datetime'

@Component({
    selector: 'app-time-only',
    templateUrl: './time-only.component.html',
    styleUrls: ['./time-only.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        DateTimeTriggerDirective,
        DateTimeInputDirective,
        DateTimeComponent,
        FormsModule
    ]
})
export class TimeOnlyComponent {
    date?: Date
}
