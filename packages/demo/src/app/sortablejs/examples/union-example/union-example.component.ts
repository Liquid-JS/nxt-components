import { CommonModule } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'
import { SortablejsModule } from 'nxt-sortablejs'
import { CodeBlockComponent } from '../../../code-block/code-block.component'

@Component({
    selector: 'app-union-example',
    templateUrl: './union-example.component.html',
    styleUrls: ['./union-example.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        SortablejsModule,
        CommonModule,
        CodeBlockComponent
    ]
})
export class UnionExampleComponent {
    readonly elems = [
        1,
        2,
        [3, 4]
    ]
    readonly isArray = Array.isArray
}
