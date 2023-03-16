import { Component, Injector, OnInit, ViewEncapsulation } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ExampleConfig } from '../../example/example.component'

@Component({
    selector: 'app-custom-adapter',
    templateUrl: './custom-adapter.component.html',
    styleUrls: ['./custom-adapter.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CustomAdapterComponent implements OnInit {

    readonly exampleImpl = import('./custom-adapter.example.ts?raw')
        .then(res => ({
            name: 'Custom date & time adapter module',
            path: 'pick-datetime/custom-adapter/custom-adapter.example.ts',
            source: res.default.trim()
        } as ExampleConfig))

    constructor(
        private readonly title: Title,
        readonly injector: Injector
    ) { }

    ngOnInit(): void {
        this.title.setTitle('Writing a custom date adapter | nxt-pick-datetime')
    }
}
