import { CommonModule } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'
import { SortablejsModule } from 'nxt-sortablejs'
import { Options } from 'sortablejs'
import { CodeBlockComponent } from '../../../code-block/code-block.component'

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        SortablejsModule,
        CodeBlockComponent,
        CommonModule
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
