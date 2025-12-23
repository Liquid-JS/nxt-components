import"./chunk-FBFWB55K.js";var e=`import { JsonPipe } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { FormArray, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'\r
import { SortablejsDirective } from 'nxt-sortablejs'\r
import { CodeBlockComponent } from '../../../code-block/code-block.component'\r
\r
@Component({\r
    selector: 'app-form-array',\r
    templateUrl: './form-array.component.html',\r
    styleUrls: ['./form-array.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [
        SortablejsDirective,
        CodeBlockComponent,
        FormsModule,
        ReactiveFormsModule,
        JsonPipe
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
`;export{e as default};
