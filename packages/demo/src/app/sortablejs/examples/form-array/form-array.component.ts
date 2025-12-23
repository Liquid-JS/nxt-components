import { JsonPipe } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'
import { FormArray, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SortablejsDirective } from 'nxt-sortablejs'
import { CodeBlockComponent } from '../../../code-block/code-block.component'

@Component({
    selector: 'app-form-array',
    templateUrl: './form-array.component.html',
    styleUrls: ['./form-array.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        SortablejsDirective,
        CodeBlockComponent,
        FormsModule,
        ReactiveFormsModule,
        JsonPipe
    ]
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
