import { CdkTableModule } from '@angular/cdk/table'
import { Component, ViewEncapsulation, input } from '@angular/core'

@Component({
    selector: 'app-inputs-table',
    imports: [
        CdkTableModule
    ],
    templateUrl: './inputs-table.component.html',
    styleUrls: ['./inputs-table.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class InputsTableComponent {

    readonly inputs = input<any[]>()
}
