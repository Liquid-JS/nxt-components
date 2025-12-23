import { JsonPipe } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'
import { SortablejsDirective } from 'nxt-sortablejs'
import { CodeBlockComponent } from '../../../code-block/code-block.component'

@Component({
    selector: 'app-basic-example',
    templateUrl: './basic-example.component.html',
    styleUrls: ['./basic-example.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        SortablejsDirective,
        CodeBlockComponent,
        JsonPipe
    ]
})
export class BasicExampleComponent {
    cities = [
        'Ankara',
        'Moscow',
        'Munich',
        'Paris',
        'Washington'
    ]
}
