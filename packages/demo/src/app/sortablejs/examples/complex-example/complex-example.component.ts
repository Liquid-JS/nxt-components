import { Component, ViewEncapsulation } from '@angular/core'
import { Options } from 'sortablejs'

@Component({
    selector: 'app-complex-example',
    templateUrl: './complex-example.component.html',
    styleUrls: ['./complex-example.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ComplexExampleComponent {
    list1 = [
        '1',
        '2',
        '3',
        '4',
        '5'
    ]

    list2 = [
        '6',
        '7',
        '8',
        '9',
        '10'
    ]

    list3 = [
        '11',
        '12'
    ]

    list4 = [
        '13'
    ]

    list1Options: Options = {
        group: {
            name: 'group1',
            put: false
        }
    }

    list2Options: Options = {
        group: {
            name: 'group2',
            put: ['group1', 'group2']
        }
    }

    list3Options: Options = {
        group: {
            name: 'group2',
            pull: 'clone',
            put: ['group1', 'group2'],
            revertClone: true
        }
    }

    list4Options: Options = {
        group: {
            name: 'group2',
            put: ['group1']
        }
    }
}
