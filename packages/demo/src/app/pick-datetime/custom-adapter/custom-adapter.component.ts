import { CommonModule } from '@angular/common'
import { Component, Injector, OnInit, PendingTasks, ViewEncapsulation } from '@angular/core'
import { ContentWrapComponent } from '../../content-wrap/content-wrap.component'
import { ExampleComponent, ExampleConfig } from '../../example/example.component'
import { MetaDirective } from '../../meta/meta.directive'
import { WaitLoad } from '../../utils/wait-load.class'

@Component({
    selector: 'app-custom-adapter',
    templateUrl: './custom-adapter.component.html',
    styleUrls: ['./custom-adapter.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        MetaDirective,
        ContentWrapComponent,
        ExampleComponent,
        CommonModule
    ]
})
export class CustomAdapterComponent extends WaitLoad implements OnInit {

    // @ts-expect-error TypeScript cannot provide types based on attributes yet
    readonly exampleImpl = import('./custom-adapter.example.ts', { with: { loader: 'text' } })
        .then(res => ({
            name: 'Custom date & time adapter module',
            path: 'pick-datetime/custom-adapter/custom-adapter.example.ts',
            source: (res as any as { default: string }).default?.trim()
        } as ExampleConfig))

    readonly doneCb = this.ims.add()

    constructor(
        readonly injector: Injector,
        readonly ims: PendingTasks
    ) {
        super()
    }

    ngOnInit(): void {
        this.exampleImpl.then(() => this.doneLoading())
            .catch(console.error)
    }
}
