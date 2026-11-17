import { Component, computed, inject, input, ViewEncapsulation } from '@angular/core'
import { FlagDatabase, FlagDatabaseKey } from '../database'
import { NXT_FLAGS_PATH } from '../path'
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
        '[style.display]': '_display()',
        '[attr.role]': 'label() ? "img" : null',
        '[attr.aria-label]': 'label() || null',
        '[attr.aria-hidden]': 'label() ? null : "true"'
    }
})
export class FlagComponent {

    private readonly path = inject(NXT_FLAGS_PATH)

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

    /**
     * The flag's accessible name, e.g. the country's name; with it, the flag is an image to assistive technologies.
     * Without it, the flag is decorative and hidden from them, e.g. beside the country's name.
     */
    readonly label = input<string>()

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
    readonly _image = computed(() => {
        const code = this._code()
        if (!code) {
            return undefined
        }
        const path = this.path
        const url = typeof path == 'function'
            ? path(code)
            : `${path && !path.endsWith('/') ? `${path}/` : path}${code}.svg`
        return `url(${JSON.stringify(url)})`
    })

    /** @internal */
    readonly _display = computed(() => this._code()
        ? ''
        : 'none')
}
