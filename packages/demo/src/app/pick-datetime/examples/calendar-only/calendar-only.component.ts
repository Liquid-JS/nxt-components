import { Component, ViewEncapsulation } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { DateTimeModule } from 'nxt-pick-datetime'

@Component({
    selector: 'app-calendar-only',
    templateUrl: './calendar-only.component.html',
    styleUrls: ['./calendar-only.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        DateTimeModule,
        FormsModule
    ]
})
export class CalendarOnlyComponent {
    date?: Date
}
