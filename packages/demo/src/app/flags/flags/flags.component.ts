import { Component, Injector, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { IdleMonitorService } from '@scullyio/ng-lib'
import { registerLocale } from 'i18n-iso-countries'
import locl from 'i18n-iso-countries/langs/en.json'
import { ExampleConfig, LoaderConfig, resolveTempaltes } from '../../example/example.component'
import { WaitLoad } from '../../utils/wait-load.class'

registerLocale(locl)

@Component({
    selector: 'app-flags',
    templateUrl: './flags.component.html',
    styleUrls: ['./flags.component.scss']
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
            import(`../examples/${p.path}/${p.path}.component`),
            ...p.include.map(ext => import(`../examples/${p.path}/${p.path}.component.${ext}?raw`))
        ])
            .then(resolveTempaltes(p, 'flags/examples'))
        )
    )

    constructor(
        private readonly title: Title,
        readonly injector: Injector,
        private readonly ims: IdleMonitorService
    ) {
        super()
    }

    ngOnInit(): void {
        this.title.setTitle('nxt-flags')
        this.addTask(() => this.ims.fireManualMyAppReadyEvent())
        this.examples.then(() => this.doneLoading())
            .catch(console.error)
    }

    exampleTrackBy(_i: number, val: ExampleConfig) {
        return val.component
    }
}
