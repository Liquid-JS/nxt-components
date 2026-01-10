import"./chunk-FBFWB55K.js";var o=`<select [(ngModel)]="code"\r
    class="form-select">\r
    @for (i of data; track i.code) {\r
    <option [value]="i.code">{{ i.name }} (ISO code: {{ i.code }})</option>\r
    }\r
</select>\r
\r
<div>\r
    <div>\r
        <h3 class="h5">Size</h3>\r
\r
        <h4 class="h6">xxs</h4>\r
        <nxt-flag [country]="code"\r
            size="xxs" />\r
\r
        <h4 class="h6">xs</h4>\r
        <nxt-flag [country]="code"\r
            size="xs" />\r
\r
        <h4 class="h6">s</h4>\r
        <nxt-flag [country]="code"\r
            size="s" />\r
\r
        <h4 class="h6">m</h4>\r
        <nxt-flag [country]="code"\r
            size="m" />\r
\r
        <h4 class="h6">l</h4>\r
        <nxt-flag [country]="code"\r
            size="l" />\r
\r
        <h4 class="h6">xl</h4>\r
        <nxt-flag [country]="code"\r
            size="xl" />\r
\r
        <h4 class="h6">xxl</h4>\r
        <nxt-flag [country]="code"\r
            size="xxl" />\r
\r
        <h4 class="h6">Custom size</h4>\r
        <nxt-flag [country]="code"\r
            [size]="120" />\r
    </div>\r
    <div>\r
        <h3 class="h5">Format</h3>\r
\r
        <h4 class="h6">none</h4>\r
        <nxt-flag [country]="code" />\r
\r
        <h4 class="h6">square</h4>\r
        <nxt-flag [country]="code"\r
            format="square" />\r
\r
        <h4 class="h6">round</h4>\r
        <nxt-flag [country]="code"\r
            format="round" />\r
    </div>\r
</div>\r
`;export{o as default};
