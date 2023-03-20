import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-time-only',
    templateUrl: './time-only.component.html',
    styleUrls: ['./time-only.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class TimeOnlyComponent {
    date?: Date
}
