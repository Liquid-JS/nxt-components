import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-basic-example',
    templateUrl: './basic-example.component.html',
    styleUrls: ['./basic-example.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class BasicExampleComponent {
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
