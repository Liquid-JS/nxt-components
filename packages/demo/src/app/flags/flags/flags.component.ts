import { AsyncPipe } from '@angular/common'
import { Component, Injector, OnInit, PendingTasks } from '@angular/core'
import { RouterModule } from '@angular/router'
import { registerLocale } from 'i18n-iso-countries'
import locl from 'i18n-iso-countries/langs/en.json'
import { ContentWrapComponent } from '../../content-wrap/content-wrap.component'
import { ExampleComponent, ExampleConfig, LoaderConfig, resolveTempaltes } from '../../example/example.component'
import { MetaDirective } from '../../meta/meta.directive'
import { WaitLoad } from '../../utils/wait-load.class'

registerLocale(locl)

@Component({
    selector: 'app-flags',
    templateUrl: './flags.component.html',
    styleUrls: ['./flags.component.scss'],
    imports: [
        MetaDirective,
        ContentWrapComponent,
        ExampleComponent,
        RouterModule,
        AsyncPipe
    ]
})
export class AppFlagsComponent extends WaitLoad implements OnInit {

    readonly examples = Promise.all(new Array<LoaderConfig>(
        {
            path: 'basic-example',
            name: 'Basic usage',
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
            .then(resolveTempaltes(p, 'flags/examples'))
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
