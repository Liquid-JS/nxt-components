import { Component, computed, input, ViewEncapsulation } from '@angular/core'
import { FlagDatabase, FlagDatabaseKey } from '../database'
import { FlagFormat, FlagFormatEnum, FlagSize, FlagSizeAlias } from '../types'

const availableFormats = new Set<FlagFormat>(Object.values(FlagFormatEnum))
const availableCodes = new Set(Object.values(FlagDatabase))

@Component({
    selector: 'nxt-flag',
    templateUrl: './flag.component.html',
    styleUrls: ['./flag.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    host: {
        '[style.width.px]': '_size()',
        '[style.height.px]': '_height()',
        '[style.borderRadius]': '_radius()',
        '[style.backgroundImage]': '_image()',
        '[style.display]': '_display()'
    }
})
export class FlagComponent {

    /** ISO 3166-1-alpha-2 country code */
    readonly country = input<FlagDatabaseKey>()

    private readonly _code = computed(() => {
        const val = this.country()
        const lc: FlagDatabaseKey | undefined = (val && val.toLowerCase() as any) || undefined
        if (lc && lc in FlagDatabase) {
            return FlagDatabase[lc]
        } else if (lc && availableCodes.has(lc)) {
            return lc
        } else {
            return undefined
        }
    })

    /** Flag format */
    readonly format = input<FlagFormat>(FlagFormatEnum.None)

    private readonly _format = computed(() => {
        const val = this.format()
        return availableFormats.has(val)
            ? val
            : FlagFormatEnum.None
    })

    /** Flag width, either value in pixels or FlagSizeAlias */
    readonly size = input<number | FlagSizeAlias>(48)

    /** @internal */
    readonly _size = computed(() => {
        const val = this.size()
        if (typeof val == 'string' && val.toLowerCase() in FlagSize) {
            return FlagSize[val.toLowerCase() as (FlagSizeAlias)]
        } else {
            return Number.isInteger(val) && Number(val) > 0
                ? Number(val)
                : 48
        }
    })

    /** @internal */
    readonly _height = computed(() => this._format() == FlagFormatEnum.None
        ? Math.floor(this._size() / 1.5)
        : this._size())

    /** @internal */
    readonly _radius = computed(() => this._format() == FlagFormatEnum.Round ? '100%' : '0%')

    /** @internal */
    readonly _image = computed(() => `url(assets/flags/${this._code()}.svg)`)

    /** @internal */
    readonly _display = computed(() => this._code()
        ? ''
        : 'none')
}
