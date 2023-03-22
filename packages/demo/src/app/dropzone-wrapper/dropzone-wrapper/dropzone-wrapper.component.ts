import { Component, Injector, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ExampleConfig, LoaderConfig, resolveTempaltes } from '../../example/example.component'

@Component({
    selector: 'app-dropzone-wrapper',
    templateUrl: './dropzone-wrapper.component.html',
    styleUrls: ['./dropzone-wrapper.component.scss']
})
export class AppDropzoneWrapperComponent implements OnInit {

    readonly examples = Promise.all(new Array<LoaderConfig>(
        {
            path: 'sandbox',
            name: 'Basic usage',
            description: 'This example does not actually upload any of the selected files, only simulates the upload process.',
            include: ['html', 'ts']
        }
    )
        .map(p => Promise.all([
            import(`../examples/${p.path}/${p.path}.component`),
            ...p.include.map(ext => import(`../examples/${p.path}/${p.path}.component.${ext}?raw`))
        ])
            .then(resolveTempaltes(p, 'dropzone-wrapper/examples'))
        )
    )

    constructor(
        private readonly title: Title,
        readonly injector: Injector
    ) { }

    ngOnInit(): void {
        this.title.setTitle('nxt-dropzone-wrapper')
    }

    exampleTrackBy(_i: number, val: ExampleConfig) {
        return val.component
    }
}
