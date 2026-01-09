import { Component, ViewEncapsulation } from '@angular/core'
import { CodeBlockComponent } from '../../code-block/code-block.component'
import { ContentWrapComponent } from '../../content-wrap/content-wrap.component'
import { InputsTableComponent } from '../../inputs-table/inputs-table.component'
import docs from '../documentation.json'
import { MetaDirective } from '../../meta/meta.directive'

@Component({
    selector: 'app-getting-started',
    templateUrl: './getting-started.component.html',
    styleUrls: ['./getting-started.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        ContentWrapComponent,
        CodeBlockComponent,
        InputsTableComponent,
        MetaDirective
    ]
})
export class GettingStartedComponent {

    readonly installScript = 'npm install --save nxt-json-view'

    readonly importComponent = `import { JsonViewComponent } from 'nxt-json-view'

@Component({
    ...
    imports: [
        ...
        JsonViewComponent
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
}
