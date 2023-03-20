import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-calendar-only',
    templateUrl: './calendar-only.component.html',
    styleUrls: ['./calendar-only.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CalendarOnlyComponent {
    date?: Date
}
