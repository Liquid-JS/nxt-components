import { Component } from '@angular/core'

@Component({
    selector: 'app-sortablejs-simple-sortable',
    templateUrl: './simple-sortable.component.html',
    styleUrls: ['./simple-sortable.component.scss']
})
export class SimpleSortableComponent {

    cities = [
        'Ankara',
        'Moscow',
        'Munich',
        'Paris',
        'Washington'
    ]

}
