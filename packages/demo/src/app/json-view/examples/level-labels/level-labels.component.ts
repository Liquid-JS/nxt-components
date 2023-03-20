import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-level-labels',
    templateUrl: './level-labels.component.html',
    styleUrls: ['./level-labels.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class LevelLabelsComponent {
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

    levelLabels: { [level: number]: { [key: string]: string } } = {
        1: { object: 'My label' }
    }
}
