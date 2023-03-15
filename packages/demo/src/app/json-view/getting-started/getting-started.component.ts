import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Title } from '@angular/platform-browser'
import docs from '../documentation.json'

@Component({
    selector: 'app-getting-started',
    templateUrl: './getting-started.component.html',
    styleUrls: ['./getting-started.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class GettingStartedComponent implements OnInit {

    readonly installScript = 'npm install --save nxt-json-view'

    readonly importModule = `import { JsonViewModule } from 'nxt-json-view'

@NgModule({
    ...
    imports: [
        ...
        JsonViewModule
    ]
})`

    readonly data = `data = {
    "name": "nxt-json-view",
    "url": "https://github.com/Liquid-JS/nxt-components/tree/master/packages/json-view",
    "string": "github",
    "number": 88,
    "boolean": true,
    "object": {
        "obj1": "obj1",
        "obj2": "obj2",
        "object": {
            "obj11": "obj11",
            "obj22": "obj22"
        },
        "emptyArray": []
    },
    "array": [
        1,
        2,
        3
    ],
    "date": new Date(),
    "null": null
}`

    readonly includeHTML = '<nxt-json-view [data]="data"></nxt-json-view>'

    readonly componentDocs = docs.components.find(d => d.selector == 'nxt-json-view')

    readonly inputs = this.componentDocs?.inputsClass.sort((a, b) => a.line - b.line) ?? []

    constructor(
        private readonly title: Title
    ) { }

    ngOnInit(): void {
        this.title.setTitle('Getting started | nxt-json-view')
    }
}
