import { InjectionToken } from '@angular/core'
import { Options } from 'sortablejs'

/** @internal */
export const GLOBALS: InjectionToken<Options> = new InjectionToken('Global config for sortablejs')
