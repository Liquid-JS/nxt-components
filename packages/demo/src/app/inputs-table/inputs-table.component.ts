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
            if (v.defaultValue) {
                const alias = v.defaultValue.match(/alias:\s*["']([^"']+)["']/)?.[1]
                if (alias)
                    v.name = alias
                v.defaultValue = v.defaultValue?.split(',').map((p: any) => p.trim())?.shift()
            }
            v.type = v.type?.split(',').map((p: any) => p.trim())?.shift()
            if ((!v.defaultValue?.trim() || v.defaultValue.trim().startsWith('undefined')) && v.type && !v.type.match(/\|\s*undefined$/))
                v.type += ' | undefined'
            if (v.defaultValue?.trim().startsWith('undefined'))
                v.defaultValue = undefined
            return v
        })
    })
}
