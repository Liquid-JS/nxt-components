import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core'
import { FlagDatabase } from '../database'
import { FlagFormat, FlagSize } from '../types'

const availableFormats = new Set(Object.values(FlagFormat))
const availableCodes = new Set(Object.values(FlagDatabase))

@Component({
    selector: 'nxt-flag',
    templateUrl: './flag.component.html',
    styleUrls: ['./flag.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class FlagComponent {

    private _code: string
    @Input() set country(val: keyof typeof FlagDatabase) {
        const lc = val && val.toLowerCase() || undefined
        if (lc in FlagDatabase) {
            this._code = FlagDatabase[lc]
        } else if (availableCodes.has(lc)) {
            this._code = lc
        } else {
            this._code = undefined
        }
    }

    private _format = FlagFormat.None
    @Input() set format(val: FlagFormat) {
        this._format = availableFormats.has(val)
            ? val
            : FlagFormat.None
    }

    private _size = 48
    @Input() set size(val: number | keyof typeof FlagSize) {
        if (typeof val == 'string' && val.toLowerCase() in FlagSize) {
            this._size = FlagSize[val.toLowerCase()]
        } else {
            this._size = Number.isInteger(val) && val > 0
                ? Number(val)
                : 48
        }
    }

    @HostBinding('style.width.px')
    get width() {
        return this._size
    }

    @HostBinding('style.height.px')
    get height() {
        return this._format == FlagFormat.None
            ? Math.floor(this._size / 1.5)
            : this._size
    }

    @HostBinding('style.borderRadius')
    get radius() {
        return this._format == FlagFormat.Round ? '100%' : '0%'
    }

    @HostBinding('style.backgroundImage')
    get image() {
        return `url(assets/flags/${this._code}.svg)`
    }

    @HostBinding('style.display')
    get display() {
        return this._code
            ? ''
            : 'none'
    }

    constructor() { }
}
