import { CommonModule } from '@angular/common'
import { Component, Injector, Input, Type, ViewEncapsulation } from '@angular/core'
import { TabsModule } from 'ngx-bootstrap/tabs'
import { HighlightModule } from 'ngx-highlightjs'

export interface ExampleConfig {
    component?: Type<any>
    name: string
    description?: string
    path: string
    template?: string
    style?: string
    source?: string
}

export interface SourceDef {
    tab: string
    language: string
    code: string
}

const extMap: {
    html: keyof ExampleConfig
    scss: keyof ExampleConfig
    ts: keyof ExampleConfig
} = {
    html: 'template',
    scss: 'style',
    ts: 'source'
}

export interface LoaderConfig {
    path: string
    name: string
    description?: string
    include: Array<keyof typeof extMap>
}

export function resolveTempaltes(cfg: LoaderConfig, prefix: string) {
    return ([cmp, ...tpl]: [any, ...Array<{ default: string }>]) => Object.assign(
        {
            component: Object.values(cmp).find(c => typeof c === 'function' && /^\s*class\s+/.test(c.toString())),
            name: cfg.name,
            description: cfg.description,
            path: `${prefix}/${cfg.path}`
        } as ExampleConfig,
        ...cfg.include.map((ext, i) => ({
            [extMap[ext]]: tpl[i].default.trim()
        }))
    ) as ExampleConfig
}

@Component({
    selector: 'app-example',
    standalone: true,
    imports: [
        CommonModule,
        TabsModule,
        HighlightModule
    ],
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ExampleComponent {

    @Input() asTab = false

    _config?: ExampleConfig
    sources?: SourceDef[]
    @Input() set config(val: ExampleConfig | undefined) {
        this._config = val
        const sources = new Array<SourceDef>()
        if (val?.template)
            sources.push({
                tab: 'HTML',
                language: 'xml',
                code: val.template
            })
        if (val?.style)
            sources.push({
                tab: 'CSS',
                language: 'scss',
                code: val.style
                    .replace(/^(\s+)/gim, '$1$1')
                    .replace(/^\}\n/gim, '}\n\n')
                    .replace(/\n\n\n+/gim, '\n\n')
            })
        if (val?.source)
            sources.push({
                tab: 'TS',
                language: 'typescript',
                code: val.source.replace(/.scss'/gim, '.css\'')
            })
        this.sources = sources.length ? sources : undefined
    }
    get config() {
        return this._config
    }

    @Input() injector?: Injector

    tabTrackBy(_i: number, val: SourceDef) {
        return val.tab
    }

}
