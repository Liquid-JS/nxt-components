import { JsonPipe } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'
import { SortablejsDirective } from 'nxt-sortablejs'
import { Options } from 'sortablejs'
import { CodeBlockComponent } from '../../../code-block/code-block.component'

@Component({
    selector: 'app-transfer-lists',
    templateUrl: './transfer-lists.component.html',
    styleUrls: ['./transfer-lists.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        SortablejsDirective,
        CodeBlockComponent,
        JsonPipe
    ]
})
export class TransferListsComponent {
    normalList1 = [
        '1',
        '2',
        '3',
        '4',
        '5'
    ]

    normalList2 = [
        '6',
        '7',
        '8',
        '9',
        '10'
    ]

    normalOptions: Options = {
        group: 'normal-group'
    }
}
