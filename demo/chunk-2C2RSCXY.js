import"./chunk-FBFWB55K.js";var a=`<select [(ngModel)]="code"\r
    class="form-select">\r
    <option *ngFor="let i of data"\r
        [value]="i.code">{{ i.name }} (ISO code: {{ i.code }})</option>\r
</select>\r
\r
<div>\r
    <div>\r
        <h3 class="h5">Size</h3>\r
\r
        <h4 class="h6">xxs</h4>\r
        <nxt-flag [country]="code"\r
            size="xxs"></nxt-flag>\r
\r
        <h4 class="h6">xs</h4>\r
        <nxt-flag [country]="code"\r
            size="xs"></nxt-flag>\r
\r
        <h4 class="h6">s</h4>\r
        <nxt-flag [country]="code"\r
            size="s"></nxt-flag>\r
\r
        <h4 class="h6">m</h4>\r
        <nxt-flag [country]="code"\r
            size="m"></nxt-flag>\r
\r
        <h4 class="h6">l</h4>\r
        <nxt-flag [country]="code"\r
            size="l"></nxt-flag>\r
\r
        <h4 class="h6">xl</h4>\r
        <nxt-flag [country]="code"\r
            size="xl"></nxt-flag>\r
\r
        <h4 class="h6">xxl</h4>\r
        <nxt-flag [country]="code"\r
            size="xxl"></nxt-flag>\r
\r
        <h4 class="h6">Custom size</h4>\r
        <nxt-flag [country]="code"\r
            [size]="120"></nxt-flag>\r
    </div>\r
    <div>\r
        <h3 class="h5">Format</h3>\r
\r
        <h4 class="h6">none</h4>\r
        <nxt-flag [country]="code"></nxt-flag>\r
\r
        <h4 class="h6">square</h4>\r
        <nxt-flag [country]="code"\r
            format="square"></nxt-flag>\r
\r
        <h4 class="h6">round</h4>\r
        <nxt-flag [country]="code"\r
            format="round"></nxt-flag>\r
    </div>\r
</div>\r
`;export{a as default};
