import { Component, inject, Injector, PendingTasks, resource, ViewEncapsulation } from '@angular/core'
import { ContentWrapComponent } from '../../content-wrap/content-wrap.component'
import { ExampleComponent, ExampleConfig } from '../../example/example.component'
import { MetaDirective } from '../../meta/meta.directive'

@Component({
    selector: 'app-custom-adapter',
    templateUrl: './custom-adapter.component.html',
    styleUrls: ['./custom-adapter.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        MetaDirective,
        ContentWrapComponent,
        ExampleComponent
    ]
})
export class CustomAdapterComponent {

    readonly exampleImpl = resource({
        // @ts-expect-error TypeScript cannot provide types based on attributes yet
        loader: () => import('./custom-adapter.example.ts', { with: { loader: 'text' } })
            .then(res => ({
                name: 'Custom date & time adapter module',
                path: 'pick-datetime/custom-adapter/custom-adapter.example.ts',
                source: (res as any as { default: string }).default?.trim()
            } as ExampleConfig))
    })

    readonly doneCb = inject(PendingTasks).add()

    readonly injector = inject(Injector)
}
