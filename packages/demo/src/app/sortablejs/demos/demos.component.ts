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
    selector: 'app-demos',
    templateUrl: './demos.component.html',
    styleUrls: ['./demos.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class DemosComponent implements OnInit {

    readonly examples = Promise.all(new Array<{
        path: string
        name: string
        description?: string
        include: Array<keyof typeof extMap>
    }>(
        {
            path: 'basic-example',
            name: 'Basic usage',
            description: 'This examples shows various elements that can be sortable. They share the same model, so reordering elements in one container propagates to all other containers in the example.',
            include: ['html', 'ts']
        },
        {
            path: 'form-array',
            name: 'Sortable FormArray',
            description: 'Most of the time one wants to sort something more than just data. Complex form inputs with FormArray controls are also supported.',
            include: ['html', 'ts']
        },
        {
            path: 'disabled-options',
            name: 'Disabled options',
            include: ['html', 'ts']
        },
        {
            path: 'events',
            name: 'Events',
            description: 'Binding to the events is easy. Any even could be attached as a property of Sortablejs. The example below binds to the onUpdate event. Drag the items and track the amount of updates.',
            include: ['html', 'ts']
        },
        {
            path: 'scrolling-options',
            name: 'Scrolling options',
            description: 'Most browsers automatically scroll content as you drag items to the edge of the screen. If the default behaviour doesn\'t work for you, Sortablejs provides an option to cofigure scrolling.',
            include: ['html', 'ts']
        },
        {
            path: 'transfer-lists',
            name: 'Transfer between lists',
            description: 'These lists are connected together. You can drag / drop elements across the lists.',
            include: ['html', 'ts']
        },
        {
            path: 'item-clone',
            name: 'Clone items',
            description: 'The first list is a clone factory, and the second list can be its target.',
            include: ['html', 'ts']
        },
        {
            path: 'complex-example',
            name: 'Complex example',
            description: 'The first list is a clone factory, and the second list can be its target.',
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
                    path: `sortablejs/examples/${p.path}`
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
        this.title.setTitle('nxt-sortablejs')
    }

    exampleTrackBy(_i: number, val: ExampleConfig) {
        return val.component
    }
}
