import { Component } from '@angular/core'
import { remove as removeDiacritics } from 'diacritics'
import { getName, registerLocale } from 'i18n-iso-countries'
import locl from 'i18n-iso-countries/langs/en.json'

registerLocale(locl)

@Component({
    selector: 'app-flags',
    templateUrl: './flags.component.html',
    styleUrls: ['./flags.component.scss']
})
export class AppFlagsComponent {
    code = 'es'
    data: Array<{ code: string, name: string }>

    constructor() {
        const codes = Object.keys(locl.countries)
        this.data = codes.map(c => ({
            code: c.toLowerCase(),
            name: getName(c.toUpperCase(), 'en')
        })).filter(({ name }) => !!name)
            .sort((a, b) => normalizeCompare(a.name, b.name))
    }
}

function normalizeCompare(a: string, b: string) {
    return normalize(a).localeCompare(normalize(b))
}

function normalize(val: string) {
    return removeDiacritics('' + (val || ''))
        .toLowerCase()
        .trim()
}
