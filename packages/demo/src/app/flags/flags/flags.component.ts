import { Component, inject, Injector, PendingTasks, resource } from '@angular/core'
import { RouterModule } from '@angular/router'
import { registerLocale } from 'i18n-iso-countries'
import locl from 'i18n-iso-countries/langs/en.json'
import { ContentWrapComponent } from '../../content-wrap/content-wrap.component'
import { ExampleComponent, LoaderConfig, resolveTempaltes } from '../../example/example.component'
import { MetaDirective } from '../../meta/meta.directive'

registerLocale(locl)

@Component({
    selector: 'app-flags',
    templateUrl: './flags.component.html',
    styleUrls: ['./flags.component.scss'],
    imports: [
        MetaDirective,
        ContentWrapComponent,
        ExampleComponent,
        RouterModule
    ]
})
export class AppFlagsComponent {

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
