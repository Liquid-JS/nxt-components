import { JsonPipe } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'
import { SortablejsDirective } from 'nxt-sortablejs'
import { Options } from 'sortablejs'
import { CodeBlockComponent } from '../../../code-block/code-block.component'

@Component({
    selector: 'app-item-clone',
    templateUrl: './item-clone.component.html',
    styleUrls: ['./item-clone.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        SortablejsDirective,
        CodeBlockComponent,
        JsonPipe
    ]
})
export class ItemCloneComponent {
    cloneList1 = [
        '1',
        '2',
        '3',
        '4',
        '5'
    ]

    cloneList2 = [
        '6',
        '7',
        '8',
        '9',
        '10'
    ]

    clone1Options: Options = {
        group: {
            name: 'clone-group',
            pull: 'clone',
            put: false
        }
    }

    clone2Options: Options = {
        group: 'clone-group'
    }
}
