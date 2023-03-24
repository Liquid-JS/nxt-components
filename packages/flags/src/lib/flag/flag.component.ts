import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core'
import { FlagDatabase, FlagDatabaseKey } from '../database'
import { FlagFormat, FlagFormatEnum, FlagSize, FlagSizeAlias } from '../types'

const availableFormats = new Set<FlagFormat>(Object.values(FlagFormatEnum))
const availableCodes = new Set(Object.values(FlagDatabase))

@Component({
    selector: 'nxt-flag',
    templateUrl: './flag.component.html',
    styleUrls: ['./flag.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class FlagComponent {

    private _code?: string
    /** ISO 3166-1-alpha-2 country code */
    @Input() set country(val: FlagDatabaseKey) {
        const lc: FlagDatabaseKey | undefined = (val && val.toLowerCase() as any) || undefined
        if (lc && lc in FlagDatabase) {
            this._code = FlagDatabase[lc]
        } else if (lc && availableCodes.has(lc)) {
            this._code = lc
        } else {
            this._code = undefined
        }
    }

    private _format: FlagFormat = FlagFormatEnum.None
    /** Flag format */
    @Input() set format(val: FlagFormat) {
        this._format = availableFormats.has(val)
            ? val
            : FlagFormatEnum.None
    }

    private _size = 48
    /** Flag width, either value in pixels or FlagSizeAlias */
    @Input() set size(val: number | FlagSizeAlias) {
        if (typeof val == 'string' && val.toLowerCase() in FlagSize) {
            this._size = FlagSize[val.toLowerCase() as (FlagSizeAlias)]
        } else {
            this._size = Number.isInteger(val) && Number(val) > 0
                ? Number(val)
                : 48
        }
    }

    /** @internal */
    @HostBinding('style.width.px')
    get width() {
        return this._size
    }

    /** @internal */
    @HostBinding('style.height.px')
    get height() {
        return this._format == FlagFormatEnum.None
            ? Math.floor(this._size / 1.5)
            : this._size
    }

    /** @internal */
    @HostBinding('style.borderRadius')
    get radius() {
        return this._format == FlagFormatEnum.Round ? '100%' : '0%'
    }

    /** @internal */
    @HostBinding('style.backgroundImage')
    get image() {
        return `url(assets/flags/${this._code}.svg)`
    }

    /** @internal */
    @HostBinding('style.display')
    get display() {
        return this._code
            ? ''
            : 'none'
    }

    constructor() { }
}
