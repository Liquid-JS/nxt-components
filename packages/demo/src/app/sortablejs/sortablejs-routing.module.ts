import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DemosComponent } from './demos/demos.component'
import { MultipleListsComponent } from './examples-e/multiple-lists/multiple-lists.component'
import { SimpleSortableComponent } from './examples-e/simple-sortable/simple-sortable.component'
import { SortableFormArrayComponent } from './examples-e/sortable-form-array/sortable-form-array.component'
import { SortableWithOptionsComponent } from './examples-e/sortable-with-options/sortable-with-options.component'
import { AppSortablejsComponent } from './sortablejs/sortablejs.component'
import { CrossComponentsMultipleListsComponent } from './test-cases/cross-components-multiple-lists/cross-components-multiple-lists.component'

const routes: Routes = [
    {
        path: 'demos',
        component: DemosComponent
    },
    {
        path: '',
        component: AppSortablejsComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'sortable-array'
            },
            {
                path: 'sortable-array',
                component: SimpleSortableComponent
            },
            {
                path: 'sortable-form-array',
                component: SortableFormArrayComponent
            },
            {
                path: 'custom-options',
                component: SortableWithOptionsComponent
            },
            {
                path: 'multiple-lists',
                component: MultipleListsComponent
            },
            {
                path: 'tests/cross-components-multiple-list',
                component: CrossComponentsMultipleListsComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppSortablejsRouterModule { }
