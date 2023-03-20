import { Component, Injector, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { registerLocale } from 'i18n-iso-countries'
import locl from 'i18n-iso-countries/langs/en.json'
import { ExampleConfig } from '../../example/example.component'

const extMap: {
    html: keyof ExampleConfig
    scss: keyof ExampleConfig
    ts: keyof ExampleConfig
} = {
    html: 'template',
    scss: 'style',
    ts: 'source'
}

registerLocale(locl)

@Component({
    selector: 'app-flags',
    templateUrl: './flags.component.html',
    styleUrls: ['./flags.component.scss']
})
export class AppFlagsComponent implements OnInit {

    readonly examples = Promise.all(new Array<{
        path: string
        name: string
        description?: string
        include: Array<keyof typeof extMap>
    }>(
        {
            path: 'basic-example',
            name: 'Basic usage',
            include: ['html', 'ts']
        }
    )
        .map(p => Promise.all([
            import(`../examples/${p.path}/${p.path}.component`),
            ...p.include.map(ext => import(`../examples/${p.path}/${p.path}.component.${ext}?raw`))
        ])
            .then(([cmp, ...tpl]) => Object.assign(
                {
                    component: Object.values(cmp).find(c => typeof c === 'function' && /^\s*class\s+/.test(c.toString())),
                    name: p.name,
                    description: p.description,
                    path: `flags/examples/${p.path}`
                } as ExampleConfig,
                ...p.include.map((ext, i) => ({
                    [extMap[ext]]: tpl[i].default.trim()
                }))
            ) as ExampleConfig)
        )
    )

    constructor(
        private readonly title: Title,
        readonly injector: Injector
    ) { }

    ngOnInit(): void {
        this.title.setTitle('nxt-flags')
    }

    exampleTrackBy(_i: number, val: ExampleConfig) {
        return val.component
    }
}
