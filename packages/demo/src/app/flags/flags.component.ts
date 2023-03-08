import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { remove as removeDiacritics } from 'diacritics'
import { getName, registerLocale } from 'i18n-iso-countries'
import locl from 'i18n-iso-countries/langs/en.json'
import { FlagDatabaseKey, FlagFormat } from 'nxt-flags'

registerLocale(locl)

@Component({
    selector: 'app-flags',
    templateUrl: './flags.component.html',
    styleUrls: ['./flags.component.scss']
})
export class AppFlagsComponent implements OnInit {

    code: FlagDatabaseKey = 'es'
    data: Array<{ code: string, name: string }>
    readonly flagFormat = FlagFormat

    constructor(
        private readonly title: Title
    ) {
        const codes = Object.keys(locl.countries)
        this.data = codes.map(c => ({
            code: c.toLowerCase(),
            name: getName(c.toUpperCase(), 'en')
        })).filter(({ name }) => !!name)
            .sort((a, b) => normalizeCompare(a.name, b.name))
    }

    ngOnInit(): void {
        this.title.setTitle('nxt-flags')
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
