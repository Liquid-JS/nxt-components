import { CdkTableModule } from '@angular/cdk/table'
import { Component, ViewEncapsulation } from '@angular/core'
import { SortablejsDirective } from 'nxt-sortablejs'

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        SortablejsDirective,
        CdkTableModule
    ]
})
export class TableComponent {
    cities = [
        'Ankara',
        'Moscow',
        'Munich',
        'Paris',
        'Washington'
    ]
}
