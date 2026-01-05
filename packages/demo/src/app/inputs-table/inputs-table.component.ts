import { CdkTableModule } from '@angular/cdk/table'
import { Component, ViewEncapsulation, computed, input } from '@angular/core'

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
    readonly parsed = computed(() => {
        const inputs = this.inputs()
        return inputs?.map(v => {
            try {
                if (v.defaultValue) {
                    // eslint-disable-next-line no-eval
                    const p: any[] = (0, eval)(`[${v.defaultValue}]`)
                    let j
                    const alias = p.find((c, i) => {
                        const match = (typeof c == 'object') && ('alias' in c)
                        if (match) {
                            j = i
                        }
                        return match
                    })?.alias
                    if (typeof j == 'number') {
                        p.splice(j, 1)
                        if (p.length)
                            v.defaultValue = `${p[0]}`
                    }
                    if (alias)
                        v.name = alias
                }
            } catch { }
            return v
        })
    })
}
