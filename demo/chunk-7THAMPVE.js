import"./chunk-FBFWB55K.js";var a=`import { Component, ViewEncapsulation } from '@angular/core'\r
import { FormsModule } from '@angular/forms'\r
import { remove as removeDiacritics } from 'diacritics'\r
import { getName, registerLocale } from 'i18n-iso-countries'\r
import locl from 'i18n-iso-countries/langs/en.json'\r
import { FlagDatabaseKey, FlagComponent } from 'nxt-flags'\r
\r
registerLocale(locl)\r
\r
@Component({\r
    selector: 'app-basic-example',\r
    templateUrl: './basic-example.component.html',\r
    styleUrls: ['./basic-example.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        FormsModule,\r
        FlagComponent\r
    ]\r
})\r
export class BasicExampleComponent {\r
\r
    code: FlagDatabaseKey = 'es'\r
\r
    // Load a list of countries from ISO countries database to use in select\r
    readonly data = Object.keys(locl.countries).map(c => ({\r
        code: c.toLowerCase(),\r
        name: getName(c.toUpperCase(), 'en')\r
    }))\r
        .filter((v): v is typeof v & { name: string } => !!v.name)\r
        .sort((a, b) => normalizeCompare(a.name, b.name))\r
}\r
\r
function normalizeCompare(a: string, b: string) {\r
    return normalize(a).localeCompare(normalize(b))\r
}\r
\r
function normalize(val: string) {\r
    return removeDiacritics('' + (val || ''))\r
        .toLowerCase()\r
        .trim()\r
}\r
`;export{a as default};
