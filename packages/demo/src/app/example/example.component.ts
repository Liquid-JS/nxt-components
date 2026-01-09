import { NgComponentOutlet } from '@angular/common'
import { Component, Injector, Type, ViewEncapsulation, computed, input } from '@angular/core'
import { TabsModule } from 'ngx-bootstrap/tabs'
import { HighlightAutoDirective } from 'nxt-highlightjs'
import { HighlightLineNumbersDirective } from 'nxt-highlightjs/line-numbers'

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
    key: string
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
        ...cfg.include.map((ext, i) => {
            try {
                return ({
                    [extMap[ext]]: tpl[i].default.trim()
                })
            } catch (_e) {
                return {
                    [extMap[ext]]: ' '
                }
            }
        })
    ) as ExampleConfig
}

@Component({
    selector: 'app-example',
    imports: [
        TabsModule,
        HighlightAutoDirective,
        HighlightLineNumbersDirective,
        NgComponentOutlet
    ],
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ExampleComponent {

    readonly injector = input<Injector>()

    readonly asTab = input<boolean>(false)

    readonly config = input<ExampleConfig>()
    readonly sources = computed(() => {
        const val = this.config()
        const sources = new Array<SourceDef>()
        if (val?.template)
            sources.push({
                tab: 'HTML',
                language: 'xml',
                code: val.template,
                key: 'template'
            })
        if (val?.style) {
            const i = sources.length
            sources.push({
                tab: 'SCSS',
                language: 'scss',
                code: val.style,
                key: 'style'
            })

            import('sass')
                .then(({ compileStringAsync }) => compileStringAsync(val.style!))
                .then(({ css }) => {
                    sources[i].tab = 'CSS'
                    sources[i].language = 'scss'
                    sources[i].code = css
                        .replace(/^(\s+)/gim, '$1$1')
                        .replace(/^\}\n/gim, '}\n\n')
                        .replace(/\n\n\n+/gim, '\n\n')
                })
                .catch(console.error)
        }
        if (val?.source)
            sources.push({
                tab: 'TS',
                language: 'typescript',
                code: val.source.replace(/.scss'/gim, '.css\''),
                key: 'source'
            })
        return sources.length ? sources : undefined
    })

}
