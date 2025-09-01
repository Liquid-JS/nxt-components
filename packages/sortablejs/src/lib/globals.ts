import { InjectionToken, Provider } from '@angular/core'
import { Options } from 'sortablejs'

/** @internal */
export const GLOBALS: InjectionToken<Options> = new InjectionToken('Global config for sortablejs')

export function provideGlobalSortableOptions(globalOptions: Options): Provider[] {
    return [
        {
            provide: GLOBALS,
            useValue: globalOptions
        }
    ]
}
