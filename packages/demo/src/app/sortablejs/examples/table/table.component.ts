import { CdkTableModule } from '@angular/cdk/table'

import { Component, ViewEncapsulation } from '@angular/core'
import { SortablejsModule } from 'nxt-sortablejs'

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        SortablejsModule,
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
