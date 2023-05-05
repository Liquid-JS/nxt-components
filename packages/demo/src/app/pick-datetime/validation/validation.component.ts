import { Component, Injector, OnInit, ViewEncapsulation } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { IdleMonitorService } from '@scullyio/ng-lib'
import { ExampleConfig, LoaderConfig, resolveTempaltes } from '../../example/example.component'
import { WaitLoad } from '../../utils/wait-load.class'

@Component({
    selector: 'app-validation',
    templateUrl: './validation.component.html',
    styleUrls: ['./validation.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
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
            import(`./${p.path}/${p.path}.component`),
            ...p.include.map(ext => import(`./${p.path}/${p.path}.component.${ext}?raw`))
        ])
            .then(resolveTempaltes(p, 'pick-datetime/validation'))
        )
    )

    constructor(
        private readonly title: Title,
        readonly injector: Injector,
        private readonly ims: IdleMonitorService
    ) {
        super()
    }

    ngOnInit(): void {
        this.title.setTitle('Validation | nxt-pick-datetime')
        this.addTask(() => this.ims.fireManualMyAppReadyEvent())
        this.examples.then(() => this.doneLoading())
            .catch(console.error)
    }

    exampleTrackBy(_i: number, val: ExampleConfig) {
        return val.component
    }
}
