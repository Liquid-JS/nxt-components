import { Component, ViewEncapsulation } from '@angular/core'
import docs from '../documentation.json'

@Component({
    selector: 'app-getting-started',
    templateUrl: './getting-started.component.html',
    styleUrls: ['./getting-started.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class GettingStartedComponent {

    readonly installScript = 'npm install --save nxt-flags'

    readonly importModule = `import { FlagsModule } from 'nxt-flags'

@NgModule({
    ...
    imports: [
        ...
        FlagsModule
    ]
})`

    readonly includeFlags = `{
    ...
    "assets": [
        ...,
        {
            "glob": "**/*",
            "input": "./node_modules/nxt-flags/assets/flags",
            "output": "./assets/flags"
        }
    ]
}`

    readonly includeHTML = '<nxt-flag country="br"></nxt-flag>'

    readonly componentDocs = docs.components.find(d => d.selector == 'nxt-flag')

    readonly componentInputs = (this.componentDocs?.inputsClass.sort((a, b) => a.line - b.line) ?? [])
        .map(v => {
            if (v.name == 'format')
                (v as any).defaultValue = "'none'"

            if (v.name == 'size')
                (v as any).defaultValue = '48'

            return v
        })
}
