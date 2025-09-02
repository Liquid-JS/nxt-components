import { Component, ViewEncapsulation } from '@angular/core'
import { CodeBlockComponent } from '../../code-block/code-block.component'
import docs from '../documentation.json'
import { ContentWrapComponent } from '../../content-wrap/content-wrap.component'
import { InputsTableComponent } from '../../inputs-table/inputs-table.component'
import { MetaDirective } from '../../meta/meta.directive'
import { OutputsTableComponent } from '../../outputs-table/outputs-table.component'

@Component({
    selector: 'app-getting-started',
    templateUrl: './getting-started.component.html',
    styleUrls: ['./getting-started.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        MetaDirective,
        ContentWrapComponent,
        CodeBlockComponent,
        InputsTableComponent,
        OutputsTableComponent
    ]
})
export class GettingStartedComponent {

    readonly installScript = 'npm install --save nxt-color-picker'

    readonly importDirective = `import { ColorPickerDirective } from 'nxt-color-picker'

@Component({
    ...
    imports: [
        ...
        ColorPickerDirective
    ]
})`

    readonly includeHTML = `<input [(nxtColor)]="color" 
    [style.background]="color"/>`

    readonly directiveDocs = docs.directives.find(d => d.selector == '[nxtColor]')

    readonly inputs = this.directiveDocs?.inputsClass.sort((a, b) => a.line - b.line) ?? []

    readonly outputs = this.directiveDocs?.outputsClass.sort((a, b) => a.line - b.line) ?? []

    readonly functions = this.directiveDocs?.methodsClass.sort((a, b) => a.line - b.line) ?? []
}
