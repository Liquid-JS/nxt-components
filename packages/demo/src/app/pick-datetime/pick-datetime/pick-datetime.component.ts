import { Component, Injector, OnInit } from '@angular/core'
import { IdleMonitorService } from '@scullyio/ng-lib'
import { ExampleConfig, LoaderConfig, resolveTempaltes } from '../../example/example.component'
import { WaitLoad } from '../../utils/wait-load.class'

@Component({
    selector: 'app-pick-datetime',
    templateUrl: './pick-datetime.component.html',
    styleUrls: ['./pick-datetime.component.scss']
})
export class AppPickDatetimeComponent extends WaitLoad implements OnInit {

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
        readonly injector: Injector,
        readonly ims: IdleMonitorService
    ) {
        super()
    }

    ngOnInit(): void {
        this.examples.then(() => this.doneLoading())
            .catch(console.error)
    }

    exampleTrackBy(_i: number, val: ExampleConfig) {
        return val.component
    }
}
