import"./chunk-2R6CW7ES.js";var e=`import { CommonModule } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { FormsModule } from '@angular/forms'\r
import { JsonViewModule } from 'nxt-json-view'\r
\r
@Component({\r
    selector: 'app-live-test',\r
    templateUrl: './live-test.component.html',\r
    styleUrls: ['./live-test.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        JsonViewModule,\r
        FormsModule,\r
        CommonModule\r
    ]\r
})\r
export class LiveTestComponent {\r
    data = {}\r
    jsonString = JSON.stringify(this.data)\r
\r
    invalidInput = false\r
\r
    load(value: string) {\r
        this.jsonString = value\r
        try {\r
            this.data = JSON.parse(this.jsonString)\r
            this.invalidInput = false\r
        } catch (_e) {\r
            this.invalidInput = true\r
        }\r
    }\r
}\r
`;export{e as default};
