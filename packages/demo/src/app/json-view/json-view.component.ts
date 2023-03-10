import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
    selector: 'app-json-view',
    templateUrl: './json-view.component.html',
    styleUrls: ['./json-view.component.scss']
})
export class AppJsonViewComponent implements OnInit {

    levelLabels: { [key: number]: { [key: string]: string } } = {
        1: { object: 'My label' }
    }

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

    customData = '{  }'
    customJson?: object

    constructor(
        private readonly title: Title
    ) { }

    ngOnInit(): void {
        this.title.setTitle('nxt-json-view')
    }

    ngModelChange($event: any) {
        try {
            this.customJson = JSON.parse($event)
        } catch (error) { }
    }
}
