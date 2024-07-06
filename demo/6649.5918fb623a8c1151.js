"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6649],{6649:r=>{r.exports="import { Component, ViewEncapsulation } from '@angular/core'\r\nimport { remove as removeDiacritics } from 'diacritics'\r\nimport { getName, registerLocale } from 'i18n-iso-countries'\r\nimport locl from 'i18n-iso-countries/langs/en.json'\r\nimport { FlagDatabaseKey } from 'nxt-flags'\r\n\r\nregisterLocale(locl)\r\n\r\n@Component({\r\n    selector: 'app-basic-example',\r\n    templateUrl: './basic-example.component.html',\r\n    styleUrls: ['./basic-example.component.scss'],\r\n    encapsulation: ViewEncapsulation.Emulated\r\n})\r\nexport class BasicExampleComponent {\r\n\r\n    code: FlagDatabaseKey = 'es'\r\n\r\n    // Load a list of countries from ISO countries database to use in select\r\n    readonly data = Object.keys(locl.countries).map(c => ({\r\n        code: c.toLowerCase(),\r\n        name: getName(c.toUpperCase(), 'en')\r\n    }))\r\n        .filter((v): v is typeof v & { name: string } => !!v.name)\r\n        .sort((a, b) => normalizeCompare(a.name, b.name))\r\n}\r\n\r\nfunction normalizeCompare(a: string, b: string) {\r\n    return normalize(a).localeCompare(normalize(b))\r\n}\r\n\r\nfunction normalize(val: string) {\r\n    return removeDiacritics('' + (val || ''))\r\n        .toLowerCase()\r\n        .trim()\r\n}\r\n"}}]);