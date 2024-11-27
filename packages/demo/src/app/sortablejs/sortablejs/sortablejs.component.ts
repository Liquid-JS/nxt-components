import { CommonModule } from '@angular/common'
import { Component, Injector, OnInit, PendingTasks } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { ContentWrapComponent } from '../../content-wrap/content-wrap.component'
import { ExampleComponent, ExampleConfig, LoaderConfig, resolveTempaltes } from '../../example/example.component'
import { MetaDirective } from '../../meta/meta.directive'
import { WaitLoad } from '../../utils/wait-load.class'

@Component({
    selector: 'app-sortablejs',
    templateUrl: './sortablejs.component.html',
    styleUrls: ['./sortablejs.component.scss'],
    imports: [
        CommonModule,
        MetaDirective,
        ContentWrapComponent,
        RouterModule,
        ExampleComponent,
        BsDropdownModule
    ]
})
export class AppSortablejsComponent extends WaitLoad implements OnInit {

    readonly examples = Promise.all(new Array<LoaderConfig>(
        {
            path: 'basic-example',
            name: 'Basic usage',
            description: 'This examples shows various elements that can be sortable. They share the same model, so reordering elements in one container propagates to all other containers in the example.',
            include: ['html', 'ts']
        },
        {
            path: 'form-array',
            name: 'Sortable FormArray',
            description: 'Most of the time one wants to sort something more than just data. Complex form inputs with FormArray controls are also supported.',
            include: ['html', 'ts']
        },
        {
            path: 'disabled-options',
            name: 'Disabled options',
            include: ['html', 'ts']
        },
        {
            path: 'events',
            name: 'Events',
            description: 'Binding to the events is easy. Any even could be attached as a property of Sortablejs. The example below binds to the onUpdate event. Drag the items and track the amount of updates.',
            include: ['html', 'ts']
        },
        {
            path: 'scrolling-options',
            name: 'Scrolling options',
            description: 'Most browsers automatically scroll content as you drag items to the edge of the screen. If the default behaviour doesn\'t work for you, Sortablejs provides an option to cofigure scrolling.',
            include: ['html', 'ts']
        },
        {
            path: 'transfer-lists',
            name: 'Transfer between lists',
            description: 'These lists are connected together. You can drag / drop elements across the lists.',
            include: ['html', 'ts']
        },
        {
            path: 'item-clone',
            name: 'Clone items',
            description: 'The first list is a clone factory, and the second list can be its target.',
            include: ['html', 'ts']
        },
        {
            path: 'complex-example',
            name: 'Complex example',
            description: 'Each list can have different options and restrictions.',
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
            .then(resolveTempaltes(p, 'sortablejs/examples'))
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
