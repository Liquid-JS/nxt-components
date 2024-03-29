import { Component, ViewEncapsulation } from '@angular/core'
import docs from '../documentation.json'

@Component({
    selector: 'app-getting-started',
    templateUrl: './getting-started.component.html',
    styleUrls: ['./getting-started.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class GettingStartedComponent {

    readonly installScript = 'npm install --save nxt-pick-datetime'

    readonly importModule = `import { DateTimeModule } from 'nxt-pick-datetime'
import { NativeDateTimeModule } from 'nxt-pick-datetime/native-adapter'

@NgModule({
    ...
    imports: [
        ...
        DateTimeModule,
        NativeDateTimeModule
    ]
})`

    readonly includeHTML = `<input [nxtDateTime]="picker"
    [nxtDateTimeTrigger]="picker"
    placeholder="Date and time">
<nxt-date-time #picker></nxt-date-time>
`

    readonly inps = [
        'nxt-date-time',
        'input[nxtDateTime]',
        '[nxtDateTimeTrigger]',
        'nxt-date-time-inline'
    ].map(selector => {
        const item = [...docs.components, ...docs.directives].find(d => d.selector == selector)
        const inputs = (item?.inputsClass.sort((a, b) => a.line - b.line) ?? [])
            .map(v => {
                switch (v.name) {
                    case 'pickerType':
                        (v as any).defaultValue = "'both'"
                        break

                    case 'pickerMode':
                        (v as any).defaultValue = "'popup'"
                        break

                    case 'disabled':
                        (v as any).defaultValue = 'false'
                        break

                    case 'isOpen':
                        (v as any).defaultValue = 'false'
                        break

                    case 'selectMode':
                        (v as any).defaultValue = "'single'"
                        break

                    case 'values':
                        v.type = 'Array<T>'
                        break

                    case 'min':
                    case 'max':
                        v.type = 'T'
                        break

                    case 'dateTimeFilter':
                        v.type = 'DateFilter<T>'
                        break

                    case 'scrollStrategy':
                        (v as any).defaultValue = 'BlockScrollStrategy'
                        break
                }
                return v
            })
        const outputs = item?.outputsClass.sort((a, b) => a.line - b.line) ?? []

        return {
            selector,
            inputs,
            outputs
        }
    })
}
