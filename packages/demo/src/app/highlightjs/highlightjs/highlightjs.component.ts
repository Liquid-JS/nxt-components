import { Component, inject, Injector, PendingTasks, resource, ViewEncapsulation } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ContentWrapComponent } from '../../content-wrap/content-wrap.component'
import { ExampleComponent, LoaderConfig, resolveTempaltes } from '../../example/example.component'
import { MetaDirective } from '../../meta/meta.directive'

@Component({
    selector: 'app-highlightjs',
    imports: [
        MetaDirective,
        ContentWrapComponent,
        ExampleComponent,
        RouterModule
    ],
    templateUrl: './highlightjs.component.html',
    styleUrl: './highlightjs.component.scss',
    encapsulation: ViewEncapsulation.Emulated
})
export class AppHighlightjsComponent {

    readonly examples = resource({
        loader: () => Promise.all(new Array<LoaderConfig>(
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
    })

    readonly doneCb = inject(PendingTasks).add()

    readonly injector = inject(Injector)

}
