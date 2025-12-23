import"./chunk-FBFWB55K.js";var i=`@if (loading) {\r
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
}\r
\r
<pre [class.empty]="!gist"><code [nxtGist]="gistId"\r
    (gistLoad)="gist = $event; loading = false"\r
    (gistError)="error = $event; loading = false"\r
    [nxtHighlight]="(gist | gistFile: 'sample.component.ts')?.content"\r
    language="ts"></code></pre>\r
`;export{i as default};
