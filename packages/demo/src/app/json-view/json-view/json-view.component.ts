import { CommonModule } from '@angular/common'
import { Component, Injector, OnInit, PendingTasks } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { ContentWrapComponent } from '../../content-wrap/content-wrap.component'
import { ExampleComponent, ExampleConfig, LoaderConfig, resolveTempaltes } from '../../example/example.component'
import { MetaDirective } from '../../meta/meta.directive'
import { WaitLoad } from '../../utils/wait-load.class'

@Component({
    selector: 'app-json-view',
    templateUrl: './json-view.component.html',
    styleUrls: ['./json-view.component.scss'],
    imports: [
        ContentWrapComponent,
        MetaDirective,
        RouterModule,
        ExampleComponent,
        CommonModule,
        BsDropdownModule
    ]
})
export class AppJsonViewComponent extends WaitLoad implements OnInit {

    readonly examples = Promise.all(new Array<LoaderConfig>(
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
            import(`../examples/${p.path}/${p.path}.component.ts`),
            ...p.include.map(ext => ext == 'ts'
                // @ts-expect-error TypeScript cannot provide types based on attributes yet
                ? import(`../examples/${p.path}/${p.path}.component.ts`, { with: { loader: 'text' } })
                : import(`../examples/${p.path}/${p.path}.component.${ext}`))
        ])
            .then(resolveTempaltes(p, 'json-view/examples'))
        )
    )

    readonly doneCb = this.ims.add()

    constructor(
        private readonly title: Title,
        readonly injector: Injector,
        private readonly ims: PendingTasks
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
