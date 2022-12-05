import { Component } from '@angular/core';
import { UntypedFormArray, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-sortable-form-array',
  templateUrl: './sortable-form-array.component.html',
  styleUrls: ['./sortable-form-array.component.css'],
})
export class SortableFormArrayComponent {

  citiesControls = new UntypedFormArray([
    'Ankara',
    'Moscow',
    'Munich',
    'Paris',
    'Washington',
  ].map(city => new UntypedFormControl(city)));

}
