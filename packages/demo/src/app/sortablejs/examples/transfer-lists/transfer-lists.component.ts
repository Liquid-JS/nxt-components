import { Component, ViewEncapsulation } from '@angular/core'
import { Options } from 'sortablejs'

@Component({
    selector: 'app-transfer-lists',
    templateUrl: './transfer-lists.component.html',
    styleUrls: ['./transfer-lists.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
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
