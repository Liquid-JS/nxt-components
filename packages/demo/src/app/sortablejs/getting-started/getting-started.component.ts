import { Component, ViewEncapsulation } from '@angular/core'
import { CodeBlockComponent } from '../../code-block/code-block.component'
import { ContentWrapComponent } from '../../content-wrap/content-wrap.component'
import { InputsTableComponent } from '../../inputs-table/inputs-table.component'
import { MetaDirective } from '../../meta/meta.directive'
import { OutputsTableComponent } from '../../outputs-table/outputs-table.component'
import docs from '../documentation.json'

@Component({
    selector: 'app-getting-started',
    templateUrl: './getting-started.component.html',
    styleUrls: ['./getting-started.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        CodeBlockComponent,
        MetaDirective,
        ContentWrapComponent,
        InputsTableComponent,
        OutputsTableComponent
    ]
})
export class GettingStartedComponent {

    readonly installScript = 'npm install --save nxt-sortablejs sortablejs'

    readonly importGlobal = `import { SortablejsModule } from 'nxt-sortablejs'

@NgModule({
    ...
    imports: [
        ...
        SortablejsModule.forRoot({
            animation: 150
        })
    ]
})`

    readonly importLocal = `import { SortablejsModule } from 'nxt-sortablejs'

@NgModule({
    ...
    imports: [
        ...
        SortablejsModule
    ]
})`

    readonly includeHTML = `<ul [nxtSortablejs]="items">
    <li *ngFor="let item of items">{{ item }}</li>
</ul>`

    readonly directiveDocs = docs.directives.find(d => d.selector == '[nxtSortablejs]')

    readonly inputs = this.directiveDocs?.inputsClass.sort((a, b) => a.line - b.line) ?? []

    readonly outputs = this.directiveDocs?.outputsClass.sort((a, b) => a.line - b.line) ?? []
}
