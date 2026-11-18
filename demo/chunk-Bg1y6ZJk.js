import"./chunk-B_U_B7EY.js";var t=`import { Component, ViewEncapsulation } from '@angular/core'
import { SortablejsDirective } from 'nxt-sortablejs'
import { Options } from 'sortablejs'
import { CodeBlockComponent } from '../../../code-block/code-block.component'

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        SortablejsDirective,
        CodeBlockComponent
    ]
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
`;export{t as default};