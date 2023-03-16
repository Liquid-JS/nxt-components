import { Component, Injector, OnInit, ViewEncapsulation } from '@angular/core'
import { Title } from '@angular/platform-browser'
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

@Component({
    selector: 'app-validation',
    templateUrl: './validation.component.html',
    styleUrls: ['./validation.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ValidationComponent implements OnInit {

    readonly examples = Promise.all(new Array<{
        path: string
        name: string
        description?: string
        include: Array<keyof typeof extMap>
    }>(
        {
            path: 'invalid-input',
            name: 'Invalid input',
            description: 'If input value isn\'t a vaild date string, a validation error will be shown. Change the input field value to see it in action.',
            include: ['html', 'ts']
        },
        {
            path: 'min-max',
            name: 'Min & max date validation',
            include: ['html', 'ts']
        },
        {
            path: 'filter',
            name: 'Custom date filtering function',
            include: ['html', 'ts']
        }
    )
        .map(p => Promise.all([
            import(`./${p.path}/${p.path}.component`),
            ...p.include.map(ext => import(`./${p.path}/${p.path}.component.${ext}?raw`))
        ])
            .then(([cmp, ...tpl]) => Object.assign(
                {
                    component: Object.values(cmp).find(c => typeof c === 'function' && /^\s*class\s+/.test(c.toString())),
                    name: p.name,
                    description: p.description,
                    path: `pick-datetime/validation/${p.path}`
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
        this.title.setTitle('Validation | nxt-pick-datetime')
    }

    exampleTrackBy(_i: number, val: ExampleConfig) {
        return val.component
    }
}
