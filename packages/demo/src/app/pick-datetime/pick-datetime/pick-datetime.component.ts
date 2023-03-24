import { Component, Injector, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ExampleConfig, LoaderConfig, resolveTempaltes } from '../../example/example.component'

@Component({
    selector: 'app-pick-datetime',
    templateUrl: './pick-datetime.component.html',
    styleUrls: ['./pick-datetime.component.scss']
})
export class AppPickDatetimeComponent implements OnInit {

    readonly examples = Promise.all(new Array<LoaderConfig>(
        {
            path: 'basic-example',
            name: 'Basic usage',
            include: ['html', 'ts']
        },
        {
            path: 'calendar-only',
            name: 'Calendar only',
            include: ['html']
        },
        {
            path: 'time-only',
            name: 'Time only',
            include: ['html']
        },
        {
            path: 'trigger-icon',
            name: 'Trigger via an icon',
            include: ['html']
        },
        {
            path: 'select-range',
            name: 'Select range',
            include: ['html', 'ts']
        },
        {
            path: 'min-max',
            name: 'Min and max date',
            include: ['html', 'ts']
        },
        {
            path: 'filter-restriction',
            name: 'Filter available dates',
            include: ['html', 'ts']
        }
    )
        .map(p => Promise.all([
            import(`../examples/${p.path}/${p.path}.component`),
            ...p.include.map(ext => import(`../examples/${p.path}/${p.path}.component.${ext}?raw`))
        ])
            .then(resolveTempaltes(p, 'pick-datetime/examples'))
        )
    )

    constructor(
        private readonly title: Title,
        readonly injector: Injector
    ) { }

    ngOnInit(): void {
        this.title.setTitle('nxt-pick-datetime')
    }

    exampleTrackBy(_i: number, val: ExampleConfig) {
        return val.component
    }
}
