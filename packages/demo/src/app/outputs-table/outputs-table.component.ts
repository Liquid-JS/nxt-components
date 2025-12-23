import { CdkTableModule } from '@angular/cdk/table'
import { Component, ViewEncapsulation, input } from '@angular/core'

@Component({
    selector: 'app-outputs-table',
    imports: [
        CdkTableModule
    ],
    templateUrl: './outputs-table.component.html',
    styleUrls: ['./outputs-table.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class OutputsTableComponent {

    readonly outputs = input<any[]>()

    formatOutputType(out: string) {
        return out.match(/<(.*)>/)?.[1] || out
    }
}
