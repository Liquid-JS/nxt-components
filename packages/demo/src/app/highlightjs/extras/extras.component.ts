import { Component, inject, Injector, PendingTasks, resource, ViewEncapsulation } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { CodeBlockComponent } from '../../code-block/code-block.component'
import { ContentWrapComponent } from '../../content-wrap/content-wrap.component'
import { ExampleComponent, LoaderConfig, resolveTempaltes } from '../../example/example.component'
import { MetaDirective } from '../../meta/meta.directive'

@Component({
    selector: 'app-extras',
    imports: [
        MetaDirective,
        ContentWrapComponent,
        ExampleComponent,
        RouterModule,
        BsDropdownModule,
        CodeBlockComponent
    ],
    templateUrl: './extras.component.html',
    styleUrl: './extras.component.scss',
    encapsulation: ViewEncapsulation.Emulated
})
export class ExtrasComponent {

    readonly examples = resource({
        loader: () => Promise.all(new Array<LoaderConfig>(
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
    })

    readonly doneCb = inject(PendingTasks).add()

    readonly loadHttp = `import { provideHttpClient } from '@angular/common/http'
import { ApplicationConfig } from '@angular/core'

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient()
    ]
}`

    readonly injector = inject(Injector)

}
