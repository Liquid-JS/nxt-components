import { ModuleWithProviders, NgModule } from '@angular/core'
import { Options } from 'sortablejs'
import { GLOBALS } from './globals'
import { SortablejsDirective } from './sortablejs.directive'

@NgModule({
    declarations: [SortablejsDirective],
    exports: [SortablejsDirective]
})
export class SortablejsModule {

    public static forRoot(globalOptions: Options): ModuleWithProviders<SortablejsModule> {
        return {
            ngModule: SortablejsModule,
            providers: [
                { provide: GLOBALS, useValue: globalOptions }
            ]
        }
    }

}
