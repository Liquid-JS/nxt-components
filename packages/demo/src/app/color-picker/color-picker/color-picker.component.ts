import { OverlayContainer } from '@angular/cdk/overlay'
import { Platform } from '@angular/cdk/platform'
import { AsyncPipe } from '@angular/common'
import { Component, DOCUMENT, Injector, OnInit, PendingTasks } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { ContentWrapComponent } from '../../content-wrap/content-wrap.component'
import { ExampleComponent, ExampleConfig, LoaderConfig, resolveTempaltes } from '../../example/example.component'
import { MetaDirective } from '../../meta/meta.directive'
import { WaitLoad } from '../../utils/wait-load.class'

@Component({
    selector: 'app-color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.scss'],
    imports: [
        MetaDirective,
        ContentWrapComponent,
        RouterModule,
        ExampleComponent,
        BsDropdownModule,
        AsyncPipe
    ]
})
export class AppColorPickerComponent extends WaitLoad implements OnInit {

    readonly examples = Promise.all(new Array<LoaderConfig>(
        {
            path: 'basic-example',
            name: 'Basic usage',
            include: ['html', 'ts']
        },
        {
            path: 'grayscale-mode',
            name: 'Grayscale color mode',
            include: ['html']
        },
        {
            path: 'show-color',
            name: 'Show the color in the input field',
            include: ['html']
        },
        {
            path: 'output-format',
            name: 'Output format',
            include: ['html']
        },
        {
            path: 'dialog-position',
            name: 'Changing dialog position',
            include: ['html']
        },
        {
            path: 'dialog-offset',
            name: 'Dialog offset',
            description: 'You can introduce a offset of the color picker relative to the html element',
            include: ['html', 'scss']
        },
        {
            path: 'cancel-button',
            name: 'Show cancel button',
            include: ['html']
        },
        {
            path: 'ok-button',
            name: 'Show OK button',
            include: ['html']
        },
        {
            path: 'change-event',
            name: 'Change color event',
            include: ['html', 'scss', 'ts']
        },
        {
            path: 'color-preset',
            name: 'Preset colors',
            include: ['html', 'ts']
        },
        {
            path: 'manage-preset',
            name: 'Add and remove preset colors',
            include: ['html', 'ts']
        },
        {
            path: 'toggle-button',
            name: 'Use toggle with ignoredElements',
            include: ['html', 'ts']
        },
        {
            path: 'alpha-channel',
            name: 'Change alpha channel behavior',
            include: ['html', 'ts']
        },
        {
            path: 'as-component',
            name: 'Show the dialog permanently',
            include: ['html', 'scss', 'ts']
        }
    )
        .map(p => Promise.all([
            import(`../examples/${p.path}/${p.path}.component.ts`),
            ...p.include.map(ext => ext == 'ts'
                // @ts-expect-error TypeScript cannot provide types based on attributes yet
                ? import(`../examples/${p.path}/${p.path}.component.ts`, { with: { loader: 'text' } })
                : import(`../examples/${p.path}/${p.path}.component.${ext}`))
        ])
            .then(resolveTempaltes(p, 'color-picker/examples'))
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

@Component({
    selector: 'app-color-picker-wrap',
    template: '<app-color-picker></app-color-picker>',
    imports: [
        AppColorPickerComponent
    ]
})
export class AppColorPickerWrapComponent extends OverlayContainer {

    constructor(
        injector: Injector
    ) {
        super(injector.get(DOCUMENT), injector.get(Platform))
    }

    override getContainerElement(): HTMLElement {
        const el = super.getContainerElement()
        el.classList.add('color-picker-container')
        return el
    }
}
