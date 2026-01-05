import"./chunk-FBFWB55K.js";var a=`@if (gist.isLoading()) {\r
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
<pre [class.empty]="!gist.hasValue()"><code \r
    [nxtHighlight]="(gist.value() | gistFile: 'sample.component.ts')?.content"\r
    language="ts"></code></pre>\r
}\r
`;export{a as default};
