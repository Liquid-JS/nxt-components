import { AsyncPipe } from '@angular/common'
import { Component, Injector, OnInit, PendingTasks } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { ContentWrapComponent } from '../../content-wrap/content-wrap.component'
import { ExampleComponent, ExampleConfig, LoaderConfig, resolveTempaltes } from '../../example/example.component'
import { MetaDirective } from '../../meta/meta.directive'
import { WaitLoad } from '../../utils/wait-load.class'

@Component({
    selector: 'app-pick-datetime',
    templateUrl: './pick-datetime.component.html',
    styleUrls: ['./pick-datetime.component.scss'],
    imports: [
        MetaDirective,
        ContentWrapComponent,
        ExampleComponent,
        RouterModule,
        BsDropdownModule,
        AsyncPipe
    ]
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
            import(`../examples/${p.path}/${p.path}.component.ts`),
            ...p.include.map(ext => ext == 'ts'
                // @ts-expect-error TypeScript cannot provide types based on attributes yet
                ? import(`../examples/${p.path}/${p.path}.component.ts`, { with: { loader: 'text' } })
                : import(`../examples/${p.path}/${p.path}.component.${ext}`))
        ])
            .then(resolveTempaltes(p, 'pick-datetime/examples'))
        )
    )

    readonly doneCb = this.ims.add()

    constructor(
        readonly injector: Injector,
        readonly ims: PendingTasks
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
