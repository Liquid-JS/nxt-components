import { CommonModule } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'
import { SortablejsModule } from 'nxt-sortablejs'
import { Options } from 'sortablejs'
import { CodeBlockComponent } from '../../../code-block/code-block.component'

@Component({
    selector: 'app-disabled-options',
    templateUrl: './disabled-options.component.html',
    styleUrls: ['./disabled-options.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        SortablejsModule,
        CommonModule,
        CodeBlockComponent
    ]
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
