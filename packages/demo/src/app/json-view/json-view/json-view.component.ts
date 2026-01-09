import { Component, inject, Injector, PendingTasks, resource } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { ContentWrapComponent } from '../../content-wrap/content-wrap.component'
import { ExampleComponent, LoaderConfig, resolveTempaltes } from '../../example/example.component'
import { MetaDirective } from '../../meta/meta.directive'

@Component({
    selector: 'app-json-view',
    templateUrl: './json-view.component.html',
    styleUrls: ['./json-view.component.scss'],
    imports: [
        ContentWrapComponent,
        MetaDirective,
        RouterModule,
        ExampleComponent,
        BsDropdownModule
    ]
})
export class AppJsonViewComponent {

    readonly examples = resource({
        loader: () => Promise.all(new Array<LoaderConfig>(
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
                path: 'expand-collapse',
                name: 'Expand / collapse the view',
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
    })

    readonly doneCb = inject(PendingTasks).add()

    readonly injector = inject(Injector)

}
