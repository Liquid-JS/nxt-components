import { Component, ViewEncapsulation } from '@angular/core'
import docs from '../documentation.json'

@Component({
    selector: 'app-getting-started',
    templateUrl: './getting-started.component.html',
    styleUrls: ['./getting-started.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class GettingStartedComponent {

    readonly installScript = 'npm install --save nxt-color-picker'

    readonly importModule = `import { ColorPickerModule } from 'nxt-color-picker'

@NgModule({
    ...
    imports: [
        ...
        ColorPickerModule
    ]
})`

    readonly includeHTML = `<input [(nxtColor)]="color" 
    [style.background]="color"/>`

    readonly directiveDocs = docs.directives.find(d => d.selector == '[nxtColor]')

    readonly inputs = this.directiveDocs?.inputsClass.sort((a, b) => a.line - b.line) ?? []

    readonly outputs = this.directiveDocs?.outputsClass.sort((a, b) => a.line - b.line) ?? []

    readonly functions = this.directiveDocs?.methodsClass.sort((a, b) => a.line - b.line) ?? []
}
