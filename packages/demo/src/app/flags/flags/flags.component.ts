import { Component, Injector, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { registerLocale } from 'i18n-iso-countries'
import locl from 'i18n-iso-countries/langs/en.json'
import { ExampleConfig, LoaderConfig, resolveTempaltes } from '../../example/example.component'

registerLocale(locl)

@Component({
    selector: 'app-flags',
    templateUrl: './flags.component.html',
    styleUrls: ['./flags.component.scss']
})
export class AppFlagsComponent implements OnInit {

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
        readonly injector: Injector
    ) { }

    ngOnInit(): void {
        this.title.setTitle('nxt-flags')
    }

    exampleTrackBy(_i: number, val: ExampleConfig) {
        return val.component
    }
}
