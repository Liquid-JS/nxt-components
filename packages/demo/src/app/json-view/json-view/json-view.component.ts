import { Component, Injector, OnInit } from '@angular/core'
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
    selector: 'app-json-view',
    templateUrl: './json-view.component.html',
    styleUrls: ['./json-view.component.scss']
})
export class AppJsonViewComponent implements OnInit {

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
        },
        {
            path: 'expansion-parameters',
            name: 'With expansion parameters',
            include: ['html']
        },
        {
            path: 'level-labels',
            name: 'With level labels',
            include: ['html', 'ts']
        },
        {
            path: 'live-test',
            name: 'Live test',
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
                    path: `json-view/examples/${p.path}`
                } as ExampleConfig,
                ...p.include.map((ext, i) => ({
                    [extMap[ext]]: tpl[i].default.trim()
                }))
            ) as ExampleConfig)
        )
    )

    levelLabels: { [key: number]: { [key: string]: string } } = {
        1: { object: 'My label' }
    }

    data = {
        name: 'twp0217',
        url: 'https://github.com/twp0217',
        string: 'github',
        number: 88,
        boolean: true,
        object: {
            obj1: 'obj1',
            obj2: 'obj2',
            object: {
                obj11: 'obj11',
                obj22: 'obj22'
            },
            emptyArray: []
        },
        array: [
            1,
            2,
            3
        ],
        null: null
    }

    customData = '{  }'
    customJson?: object

    constructor(
        private readonly title: Title,
        readonly injector: Injector
    ) { }

    ngOnInit(): void {
        this.title.setTitle('nxt-json-view')
    }

    exampleTrackBy(_i: number, val: ExampleConfig) {
        return val.component
    }

    ngModelChange($event: any) {
        try {
            this.customJson = JSON.parse($event)
        } catch (error) { }
    }
}
