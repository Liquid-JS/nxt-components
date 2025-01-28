import"./chunk-FBFWB55K.js";var s=`@if (loading) {\r
<div class="d-flex justify-content-center">\r
    <div class="spinner-border"\r
        role="status">\r
        <span class="visually-hidden">Loading...</span>\r
    </div>\r
</div>\r
} @else if (error) {\r
<div class="alert alert-danger"\r
    role="alert">\r
    <span class="gist-loading-error">{{ error.message }}</span>\r
</div>\r
} @else {\r
<label for="gist"\r
    class="form-label">File</label>\r
<select [(ngModel)]="selectedFile"\r
    class="form-select"\r
    name="gist">\r
    @for (file of gist?.files | keyvalue; track file.key) {\r
    <option [value]="file.key">{{ file.value.filename }}</option>\r
    }\r
</select>\r
\r
<br>\r
}\r
\r
<pre [ngClass]="{ 'empty': !gist }"><code [nxtGist]="gistId"\r
    (gistLoad)="setGist($event)"\r
    (gistError)="error = $event; loading = false"\r
    [nxtHighlight]="(gist | gistFile: selectedFile)?.content"\r
    [language]="extName(selectedFile) ?? ''"></code></pre>\r
`;export{s as default};
