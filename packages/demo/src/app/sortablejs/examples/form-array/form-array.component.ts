import { Component, ViewEncapsulation } from '@angular/core'
import { FormArray, FormControl } from '@angular/forms'

@Component({
    selector: 'app-form-array',
    templateUrl: './form-array.component.html',
    styleUrls: ['./form-array.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class FormArrayComponent {
    citiesControls = new FormArray([
        'Ankara',
        'Moscow',
        'Munich',
        'Paris',
        'Washington'
    ].map(city => new FormControl(city)))
}
