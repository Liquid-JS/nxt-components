import { Component, Injector, OnInit, ViewEncapsulation } from '@angular/core'
import { IdleMonitorService } from '@scullyio/ng-lib'
import { ExampleConfig } from '../../example/example.component'
import { WaitLoad } from '../../utils/wait-load.class'

@Component({
    selector: 'app-custom-adapter',
    templateUrl: './custom-adapter.component.html',
    styleUrls: ['./custom-adapter.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CustomAdapterComponent extends WaitLoad implements OnInit {

    readonly exampleImpl = import('./custom-adapter.example.ts?raw')
        .then(res => ({
            name: 'Custom date & time adapter module',
            path: 'pick-datetime/custom-adapter/custom-adapter.example.ts',
            source: res.default.trim()
        } as ExampleConfig))

    constructor(
        readonly injector: Injector,
        readonly ims: IdleMonitorService
    ) {
        super()
    }

    ngOnInit(): void {
        this.exampleImpl.then(() => this.doneLoading())
            .catch(console.error)
    }
}
