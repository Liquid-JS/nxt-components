import { CommonModule } from '@angular/common'
import { Component, Injector, OnInit, PendingTasks } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ContentWrapComponent } from '../../content-wrap/content-wrap.component'
import { ExampleComponent, ExampleConfig, LoaderConfig, resolveTempaltes } from '../../example/example.component'
import { MetaDirective } from '../../meta/meta.directive'
import { WaitLoad } from '../../utils/wait-load.class'

@Component({
    selector: 'app-dropzone-wrapper',
    templateUrl: './dropzone-wrapper.component.html',
    styleUrls: ['./dropzone-wrapper.component.scss'],
    imports: [
        CommonModule,
        MetaDirective,
        ContentWrapComponent,
        RouterModule,
        ExampleComponent
    ]
})
export class AppDropzoneWrapperComponent extends WaitLoad implements OnInit {

    readonly examples = Promise.all(new Array<LoaderConfig>(
        {
            path: 'sandbox',
            name: 'Basic usage',
            description: 'This example does not actually upload any of the selected files, only simulates the upload process.',
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
            .then(resolveTempaltes(p, 'dropzone-wrapper/examples'))
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
