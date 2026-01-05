import"./chunk-FBFWB55K.js";var s=`@if (gist.isLoading()) {\r
<div class="d-flex justify-content-center">\r
    <div class="spinner-border"\r
        role="status">\r
        <span class="visually-hidden">Loading...</span>\r
    </div>\r
</div>\r
} @else if (gist.error(); as err) {\r
<div class="alert alert-danger"\r
    role="alert">\r
    <span class="gist-loading-error">{{ err.message }}</span>\r
</div>\r
} @else {\r
<label for="gist"\r
    class="form-label">File</label>\r
<select [ngModel]="selectedFile()"\r
    (ngModelChange)="selectedFile.set($event)"\r
    class="form-select"\r
    name="gist">\r
    @for (file of gist.value()?.files | keyvalue; track file.key) {\r
    <option [value]="file.key">{{ file.value.filename }}</option>\r
    }\r
</select>\r
\r
<br>\r
\r
<pre [class.empty]="!gist.hasValue()"><code\r
    [nxtHighlight]="(gist.value() | gistFile: selectedFile())?.content"\r
    [language]="extName()"></code></pre>\r
}\r
`;export{s as default};
