import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-basic-example',
    templateUrl: './basic-example.component.html',
    styleUrls: ['./basic-example.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
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
