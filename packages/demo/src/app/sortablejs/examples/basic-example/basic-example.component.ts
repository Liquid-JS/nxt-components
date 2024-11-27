import { CommonModule } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'
import { SortablejsModule } from 'nxt-sortablejs'
import { CodeBlockComponent } from '../../../code-block/code-block.component'

@Component({
    selector: 'app-basic-example',
    templateUrl: './basic-example.component.html',
    styleUrls: ['./basic-example.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        SortablejsModule,
        CommonModule,
        CodeBlockComponent
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
