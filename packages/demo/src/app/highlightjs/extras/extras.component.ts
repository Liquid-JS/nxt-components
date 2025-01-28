import { CommonModule } from '@angular/common'
import { Component, Injector, OnInit, PendingTasks, ViewEncapsulation } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { CodeBlockComponent } from '../../code-block/code-block.component'
import { ContentWrapComponent } from '../../content-wrap/content-wrap.component'
import { ExampleComponent, ExampleConfig, LoaderConfig, resolveTempaltes } from '../../example/example.component'
import { MetaDirective } from '../../meta/meta.directive'
import { WaitLoad } from '../../utils/wait-load.class'

@Component({
    selector: 'app-extras',
    imports: [
        MetaDirective,
        ContentWrapComponent,
        ExampleComponent,
        CommonModule,
        RouterModule,
        BsDropdownModule,
        CodeBlockComponent
    ],
    templateUrl: './extras.component.html',
    styleUrl: './extras.component.scss',
    encapsulation: ViewEncapsulation.Emulated
})
export class ExtrasComponent extends WaitLoad implements OnInit {

    readonly examples = Promise.all(new Array<LoaderConfig>(
        {
            path: 'file',
            name: 'Display contents of a source file',
            include: ['html', 'ts']
        },
        {
            path: 'gist-file',
            name: 'Display a file form a gist',
            include: ['html', 'ts']
        },
        {
            path: 'gist',
            name: 'Display contents of a gist',
            include: ['html', 'ts']
        }
    )
        .map(p => Promise.all([
            import(`./${p.path}/${p.path}.component.ts`),
            ...p.include.map(ext => ext == 'ts'
                // @ts-expect-error TypeScript cannot provide types based on attributes yet
                ? import(`./${p.path}/${p.path}.component.ts`, { with: { loader: 'text' } })
                : import(`./${p.path}/${p.path}.component.${ext}`))
        ])
            .then(resolveTempaltes(p, 'pick-datetime/validation'))
        )
    )

    readonly doneCb = this.ims.add()

    readonly loadHttp = `import { provideHttpClient } from '@angular/common/http'
import { ApplicationConfig } from '@angular/core'

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient()
    ]
}`

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
