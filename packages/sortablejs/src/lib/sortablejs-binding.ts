import { type FormArray } from '@angular/forms'
import { SortableData } from './sortablejs.directive'

/** @internal */
function isFormArray<T>(target: SortableData<T>): target is (SortableData<T> & FormArray<any>) {
    // we need this to identify that the target is a FormArray
    // we don't want to have a dependency on @angular/forms just for that
    // just checking for random FormArray methods not available on a standard array
    return !!target.at && !!(target as FormArray).insert && !!(target as FormArray).reset
}

/** @internal */
export class SortablejsBinding<T> {

    constructor(
        private readonly target: SortableData<T>
    ) { }

    insert(index: number, item: any) {
        if (isFormArray(this.target)) {
            this.target.insert(index, item)
        } else {
            (this.target as T[]).splice(index, 0, item)
        }
    }

    get(index: number) {
        return isFormArray(this.target) ? this.target.at(index) as T : (this.target as T[])[index]
    }

    remove(index: number) {
        let item

        if (isFormArray(this.target)) {
            item = this.target.at(index)
            this.target.removeAt(index)
        } else {
            item = (this.target as T[]).splice(index, 1)[0]
        }

        return item
    }

}
