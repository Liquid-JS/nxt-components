import { CdkTableModule } from '@angular/cdk/table'
import { CommonModule } from '@angular/common'
import { Component, Input, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-outputs-table',
    imports: [
        CommonModule,
        CdkTableModule
    ],
    templateUrl: './outputs-table.component.html',
    styleUrls: ['./outputs-table.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class OutputsTableComponent {

    @Input() outputs?: any[]

    formatOutputType(out: string) {
        return out.match(/<(.*)>/)?.[1]
    }
}
