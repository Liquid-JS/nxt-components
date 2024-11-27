import"./chunk-2R6CW7ES.js";var s=`<h3 class="h4">Button groups</h3>\r
\r
<div class="btn-group-vertical"\r
    [nxtSortablejs]="cities">\r
    <button type="button"\r
        class="btn btn-secondary"\r
        *ngFor="let city of cities">{{ city }}</button>\r
</div>\r
\r
<br><br>\r
\r
<div class="btn-group"\r
    [nxtSortablejs]="cities">\r
    <button type="button"\r
        class="btn btn-secondary"\r
        *ngFor="let city of cities">{{ city }}</button>\r
</div>\r
\r
<br><br>\r
\r
<h3 class="h4">Cards</h3>\r
\r
<div class="row"\r
    [nxtSortablejs]="cities">\r
    <div class="col mb-4"\r
        *ngFor="let city of cities">\r
        <div class="card">\r
            <div class="card-header">{{ city }}</div>\r
            <div class="card-body">{{ city }} description</div>\r
        </div>\r
    </div>\r
</div>\r
\r
<h3 class="h4">Navigation</h3>\r
\r
<ul class="nav nav-pills mb-3"\r
    [nxtSortablejs]="cities">\r
    <li class="nav-item"\r
        *ngFor="let city of cities">\r
        <a class="nav-link active mr-1">{{ city }}</a>\r
    </li>\r
</ul>\r
\r
<nav aria-label="breadcrumb"\r
    role="navigation">\r
    <ol class="breadcrumb"\r
        [nxtSortablejs]="cities">\r
        <li class="breadcrumb-item active"\r
            *ngFor="let city of cities">{{ city }}</li>\r
    </ol>\r
</nav>\r
\r
<h3 class="h4">The actual model</h3>\r
\r
<app-code-block [code]="cities | json"\r
    [languages]="['json']"\r
    [copy]="false"></app-code-block>\r
`;export{s as default};
