import { Component, ViewEncapsulation } from '@angular/core'
import { JsonViewComponent } from 'nxt-json-view'

@Component({
    selector: 'app-expansion-parameters',
    templateUrl: './expansion-parameters.component.html',
    styleUrls: ['./expansion-parameters.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        JsonViewComponent
    ]
})
export class ExpansionParametersComponent {
    data = {
        name: 'twp0217',
        url: 'https://github.com/twp0217',
        string: 'github',
        number: 88,
        boolean: true,
        object: {
            obj1: 'obj1',
            obj2: 'obj2',
            object: {
                obj11: 'obj11',
                obj22: 'obj22'
            },
            emptyArray: []
        },
        array: [
            1,
            2,
            3
        ],
        null: null
    }
}
