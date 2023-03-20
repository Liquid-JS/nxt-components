import { Component, ViewEncapsulation } from '@angular/core'
import { Options } from 'sortablejs'

@Component({
    selector: 'app-disabled-options',
    templateUrl: './disabled-options.component.html',
    styleUrls: ['./disabled-options.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class DisabledOptionsComponent {
    draggableItems = [
        { draggable: true, text: '1' },
        { draggable: true, text: '2' },
        { draggable: false, text: '3' },
        { draggable: true, text: '4' },
        { draggable: true, text: '5' }
    ]

    draggableOptions: Options = {
        draggable: '.draggable'
    }
}
