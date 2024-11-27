import"./chunk-FBFWB55K.js";var m=`import { CommonModule } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { FormArray, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'\r
import { SortablejsModule } from 'nxt-sortablejs'\r
import { CodeBlockComponent } from '../../../code-block/code-block.component'\r
\r
@Component({\r
    selector: 'app-form-array',\r
    templateUrl: './form-array.component.html',\r
    styleUrls: ['./form-array.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        SortablejsModule,\r
        CommonModule,\r
        CodeBlockComponent,\r
        FormsModule,\r
        ReactiveFormsModule\r
    ]\r
})\r
export class FormArrayComponent {\r
    citiesControls = new FormArray([\r
        'Ankara',\r
        'Moscow',\r
        'Munich',\r
        'Paris',\r
        'Washington'\r
    ].map(city => new FormControl(city)))\r
}\r
`;export{m as default};
