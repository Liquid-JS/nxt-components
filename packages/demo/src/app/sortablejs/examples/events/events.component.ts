import { Component, ViewEncapsulation } from '@angular/core'
import { Options } from 'sortablejs'

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class EventsComponent {
    eventItems = [
        '1',
        '2',
        '3',
        '4',
        '5'
    ]

    eventUpdateCounter = 0

    eventOptions: Options = {
        onUpdate: () => this.eventUpdateCounter++
    }
}
