import { Component, ViewEncapsulation } from '@angular/core'
import { Options } from 'sortablejs'

@Component({
    selector: 'app-item-clone',
    templateUrl: './item-clone.component.html',
    styleUrls: ['./item-clone.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
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
