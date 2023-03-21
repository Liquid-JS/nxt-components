import { OverlayContainer } from '@angular/cdk/overlay'
import { Platform } from '@angular/cdk/platform'
import { DOCUMENT } from '@angular/common'
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
    selector: 'app-color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.scss']
})
export class AppColorPickerComponent extends OverlayContainer implements OnInit {

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
            path: 'grayscale-mode',
            name: 'Grayscale color mode',
            include: ['html']
        },
        {
            path: 'show-color',
            name: 'Show the color in the input field',
            include: ['html']
        },
        {
            path: 'output-format',
            name: 'Output format',
            include: ['html']
        },
        {
            path: 'dialog-position',
            name: 'Changing dialog position',
            include: ['html']
        },
        {
            path: 'dialog-offset',
            name: 'Dialog offset',
            description: 'You can introduce a offset of the color picker relative to the html element',
            include: ['html', 'scss']
        },
        {
            path: 'cancel-button',
            name: 'Show cancel button',
            include: ['html']
        },
        {
            path: 'ok-button',
            name: 'Show OK button',
            include: ['html']
        },
        {
            path: 'change-event',
            name: 'Change color event',
            include: ['html', 'scss', 'ts']
        },
        {
            path: 'color-preset',
            name: 'Preset colors',
            include: ['html', 'ts']
        },
        {
            path: 'manage-preset',
            name: 'Add and remove preset colors',
            include: ['html', 'ts']
        },
        {
            path: 'toggle-button',
            name: 'Use toggle with ignoredElements',
            include: ['html', 'ts']
        },
        {
            path: 'alpha-channel',
            name: 'Change alpha channel behavior',
            include: ['html', 'ts']
        },
        {
            path: 'as-component',
            name: 'Show the dialog permanently',
            include: ['html', 'scss', 'ts']
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
                    path: `color-picker/examples/${p.path}`
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
    ) {
        super(injector.get(DOCUMENT), injector.get(Platform))
    }

    ngOnInit(): void {
        this.title.setTitle('nxt-color-picker')
    }

    exampleTrackBy(_i: number, val: ExampleConfig) {
        return val.component
    }

    override getContainerElement(): HTMLElement {
        const el = super.getContainerElement()
        el.classList.add('color-picker-container')
        return el
    }
}
