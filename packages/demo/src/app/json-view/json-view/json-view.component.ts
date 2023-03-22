import { Component, Injector, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ExampleConfig, LoaderConfig, resolveTempaltes } from '../../example/example.component'

@Component({
    selector: 'app-json-view',
    templateUrl: './json-view.component.html',
    styleUrls: ['./json-view.component.scss']
})
export class AppJsonViewComponent implements OnInit {

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
            import(`../examples/${p.path}/${p.path}.component`),
            ...p.include.map(ext => import(`../examples/${p.path}/${p.path}.component.${ext}?raw`))
        ])
            .then(resolveTempaltes(p, 'json-view/examples'))
        )
    )

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
}
