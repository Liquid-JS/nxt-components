import { AsyncPipe } from '@angular/common'
import { Component, Injector, OnInit, PendingTasks, ViewEncapsulation } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { ContentWrapComponent } from '../../content-wrap/content-wrap.component'
import { ExampleComponent, ExampleConfig, LoaderConfig, resolveTempaltes } from '../../example/example.component'
import { MetaDirective } from '../../meta/meta.directive'
import { WaitLoad } from '../../utils/wait-load.class'

@Component({
    selector: 'app-validation',
    templateUrl: './validation.component.html',
    styleUrls: ['./validation.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        MetaDirective,
        ContentWrapComponent,
        ExampleComponent,
        RouterModule,
        BsDropdownModule,
        AsyncPipe
    ]
})
export class ValidationComponent extends WaitLoad implements OnInit {

    readonly examples = Promise.all(new Array<LoaderConfig>(
        {
            path: 'invalid-input',
            name: 'Invalid input',
            description: 'If input value isn\'t a vaild date string, a validation error will be shown. Change the input field value to see it in action.',
            include: ['html', 'ts']
        },
        {
            path: 'min-max',
            name: 'Min & max date validation',
            include: ['html', 'ts']
        },
        {
            path: 'filter',
            name: 'Custom date filtering function',
            include: ['html', 'ts']
        },
        {
            path: 'range',
            name: 'Invalid date range',
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
