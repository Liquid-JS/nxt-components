import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MultipleListsComponent } from './examples/multiple-lists/multiple-lists.component'
import { SimpleSortableComponent } from './examples/simple-sortable/simple-sortable.component'
import { SortableFormArrayComponent } from './examples/sortable-form-array/sortable-form-array.component'
import { SortableWithOptionsComponent } from './examples/sortable-with-options/sortable-with-options.component'
import { AppSortablejsComponent } from './sortablejs.component'
import { CrossComponentsMultipleListsComponent } from './test-cases/cross-components-multiple-lists/cross-components-multiple-lists.component'

const routes: Routes = [
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
