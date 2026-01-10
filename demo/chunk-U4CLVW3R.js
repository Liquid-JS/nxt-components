import"./chunk-FBFWB55K.js";var c=`<h3 class="h4">Button groups</h3>\r
\r
<div class="btn-group-vertical"\r
    [nxtSortablejs]="cities">\r
    @for (city of cities; track city) {\r
    <button type="button"\r
        class="btn btn-secondary">{{ city }}</button>\r
    }\r
</div>\r
\r
<br><br>\r
\r
<div class="btn-group"\r
    [nxtSortablejs]="cities">\r
    @for (city of cities; track city) {\r
    <button type="button"\r
        class="btn btn-secondary">{{ city }}</button>\r
    }\r
</div>\r
\r
<br><br>\r
\r
<h3 class="h4">Cards</h3>\r
\r
<div class="row"\r
    [nxtSortablejs]="cities">\r
    @for (city of cities; track city) {\r
    <div class="col mb-4">\r
        <div class="card">\r
            <div class="card-header">{{ city }}</div>\r
            <div class="card-body">{{ city }} description</div>\r
        </div>\r
    </div>\r
    }\r
</div>\r
\r
<h3 class="h4">Navigation</h3>\r
\r
<ul class="nav nav-pills mb-3"\r
    [nxtSortablejs]="cities">\r
    @for (city of cities; track city) {\r
    <li class="nav-item">\r
        <a class="nav-link active mr-1">{{ city }}</a>\r
    </li>\r
    }\r
</ul>\r
\r
<nav aria-label="breadcrumb"\r
    role="navigation">\r
    <ol class="breadcrumb"\r
        [nxtSortablejs]="cities">\r
        @for (city of cities; track city) {\r
        <li class="breadcrumb-item active">{{ city }}</li>\r
        }\r
    </ol>\r
</nav>\r
\r
<h3 class="h4">The actual model</h3>\r
\r
<app-code-block [code]="cities | json"\r
    [languages]="['json']"\r
    [copy]="false" />\r
`;export{c as default};
