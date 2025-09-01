import { ModuleWithProviders, NgModule } from '@angular/core'
import { Options } from 'sortablejs'
import { provideGlobalSortableOptions } from './globals'
import { SortablejsDirective } from './sortablejs.directive'

/** @deprecated use standalone imports */
@NgModule({
    imports: [
        SortablejsDirective
    ],
    exports: [
        SortablejsDirective
    ]
})
export class SortablejsModule {
    /** @deprecated use provideGlobalSortableOptions */
    static forRoot(globalOptions: Options): ModuleWithProviders<SortablejsModule> {
        return {
            ngModule: SortablejsModule,
            providers: provideGlobalSortableOptions(globalOptions)
        }
    }

}
