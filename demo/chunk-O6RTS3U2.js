import"./chunk-FBFWB55K.js";var a=`<div class="row">\r
    <div class="col">\r
\r
        <label class="form-label"\r
            for="language">Language</label>\r
        <select [(ngModel)]="language"\r
            class="form-select"\r
            name="language">\r
            @for (i of languages; track i) {\r
            <option [value]="i[1]">{{ i[0] }}</option>\r
            }\r
        </select>\r
\r
        <br>\r
\r
        <label class="form-label"\r
            for="theme">Theme</label>\r
        <select [(ngModel)]="theme"\r
            class="form-select"\r
            name="theme">\r
            @for (i of themes; track i) {\r
            <option [value]="i">{{ i }}</option>\r
            }\r
        </select>\r
\r
        <br>\r
\r
        <div class="form-check form-switch">\r
            <input class="form-check-input"\r
                type="checkbox"\r
                role="switch"\r
                id="is-directive"\r
                name="is-directive"\r
                [(ngModel)]="lineNumbers">\r
            <label class="form-check-label"\r
                for="is-directive">Show line numbers</label>\r
        </div>\r
\r
        <br>\r
\r
        <textarea class="form-control"\r
            rows="15"\r
            placeholder="Paste code here"\r
            [(ngModel)]="code"></textarea>\r
\r
    </div>\r
    <div class="col highlighted-result $-{{ theme }}">\r
\r
        @if(lineNumbers){\r
        <pre><code [nxtHighlightAuto]="code"\r
                [languages]="[language]"\r
              lineNumbers></code></pre>\r
        } @else {\r
        <pre><code [nxtHighlightAuto]="code"\r
              [languages]="[language]"></code></pre>\r
        }\r
\r
    </div>\r
</div>\r
`;export{a as default};
