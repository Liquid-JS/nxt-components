import { CdkTableModule } from '@angular/cdk/table'
import { Component, ViewEncapsulation, computed, input } from '@angular/core'

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
    readonly parsed = computed(() => {
        const outputs = this.outputs()
        return outputs?.map(v => {
            try {
                if (v.defaultValue) {
                    // eslint-disable-next-line no-eval
                    const p: any[] = (0, eval)(`[${v.defaultValue}]`)
                    const alias = p.find((c) => (typeof c == 'object') && ('alias' in c))?.alias
                    if (alias)
                        v.name = alias
                }
            } catch { }
            if (v.type == 'EventEmitter')
                v.type = v.defaultValue?.match(/<(.*)>/)?.[1] || v.defaultValue || v.type
            return v
        })
    })
}
