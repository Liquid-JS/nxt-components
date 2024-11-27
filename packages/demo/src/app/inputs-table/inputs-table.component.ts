import { CdkTableModule } from '@angular/cdk/table'
import { CommonModule } from '@angular/common'
import { Component, Input, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-inputs-table',
    imports: [
        CommonModule,
        CdkTableModule
    ],
    templateUrl: './inputs-table.component.html',
    styleUrls: ['./inputs-table.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class InputsTableComponent {

    @Input() inputs?: any[]
}
