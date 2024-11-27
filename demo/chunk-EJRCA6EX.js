import"./chunk-2R6CW7ES.js";var o=`import { Component, ViewEncapsulation } from '@angular/core'\r
import { JsonViewModule } from 'nxt-json-view'\r
\r
@Component({\r
    selector: 'app-level-labels',\r
    templateUrl: './level-labels.component.html',\r
    styleUrls: ['./level-labels.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        JsonViewModule\r
    ]\r
})\r
export class LevelLabelsComponent {\r
    data = {\r
        name: 'twp0217',\r
        url: 'https://github.com/twp0217',\r
        string: 'github',\r
        number: 88,\r
        boolean: true,\r
        object: {\r
            obj1: 'obj1',\r
            obj2: 'obj2',\r
            object: {\r
                obj11: 'obj11',\r
                obj22: 'obj22'\r
            },\r
            emptyArray: []\r
        },\r
        array: [\r
            1,\r
            2,\r
            3\r
        ],\r
        null: null\r
    }\r
\r
    levelLabels: { [level: number]: { [key: string]: string } } = {\r
        1: { object: 'My label' }\r
    }\r
}\r
`;export{o as default};
