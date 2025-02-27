import { CommonModule } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { remove as removeDiacritics } from 'diacritics'
import { getName, registerLocale } from 'i18n-iso-countries'
import locl from 'i18n-iso-countries/langs/en.json'
import { FlagDatabaseKey, FlagsModule } from 'nxt-flags'

registerLocale(locl)

@Component({
    selector: 'app-basic-example',
    templateUrl: './basic-example.component.html',
    styleUrls: ['./basic-example.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        CommonModule,
        FormsModule,
        FlagsModule
    ]
})
export class BasicExampleComponent {

    code: FlagDatabaseKey = 'es'

    // Load a list of countries from ISO countries database to use in select
    readonly data = Object.keys(locl.countries).map(c => ({
        code: c.toLowerCase(),
        name: getName(c.toUpperCase(), 'en')
    }))
        .filter((v): v is typeof v & { name: string } => !!v.name)
        .sort((a, b) => normalizeCompare(a.name, b.name))
}

function normalizeCompare(a: string, b: string) {
    return normalize(a).localeCompare(normalize(b))
}

function normalize(val: string) {
    return removeDiacritics('' + (val || ''))
        .toLowerCase()
        .trim()
}
