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

    constructor(
        private readonly title: Title
    ) { }

    ngOnInit(): void {
        this.title.setTitle('Getting started | nxt-sortablejs')
    }
}
