import { Pipe, PipeTransform } from '@angular/core'

/** @internal */
@Pipe({
    name: 'numberFixedLen',
    standalone: false
})
export class NumberFixedLenPipe implements PipeTransform {
    transform(num: number | undefined, len: number | undefined) {
        if (num == undefined || !Number.isFinite(num))
            return undefined

        const number = Math.floor(num)

        if (len == undefined || !Number.isFinite(len))
            return number

        return number.toFixed(0).padStart(Math.floor(len), '0')
    }
}
