import"./chunk-FBFWB55K.js";var i=`<div class="row">\r
    <div class="col">\r
        <h3 class="h5">Controls</h3>\r
\r
        <div class="form-check form-switch">\r
            <input class="form-check-input"\r
                type="checkbox"\r
                role="switch"\r
                id="is-directive"\r
                name="is-directive"\r
                [ngModel]="type == 'directive'"\r
                (ngModelChange)="type = $event ? 'directive' : 'component'">\r
            <label class="form-check-label"\r
                for="is-directive">Directive</label>\r
        </div>\r
\r
        <div class="form-check form-switch">\r
            <input class="form-check-input"\r
                type="checkbox"\r
                role="switch"\r
                id="is-disabled"\r
                name="is-disabled"\r
                [ngModel]="disabled"\r
                (ngModelChange)="disabled = !!$event">\r
            <label class="form-check-label"\r
                for="is-disabled">Disabled</label>\r
        </div>\r
\r
        <div class="form-check form-switch">\r
            <input class="form-check-input"\r
                type="checkbox"\r
                role="switch"\r
                id="is-multiple"\r
                name="is-multiple"\r
                [ngModel]="config.maxFiles != 1"\r
                (ngModelChange)="config.maxFiles = $event ? undefined : 1">\r
            <label class="form-check-label"\r
                for="is-multiple">Upload multiple files</label>\r
        </div>\r
\r
        <div class="form-check form-switch">\r
            <input class="form-check-input"\r
                type="checkbox"\r
                role="switch"\r
                id="auto-reset"\r
                name="auto-reset"\r
                [ngModel]="autoReset"\r
                (ngModelChange)="toggleAutoReset($event)">\r
            <label class="form-check-label"\r
                for="auto-reset">Auto reset</label>\r
        </div>\r
\r
        <div class="form-check form-switch">\r
            <input class="form-check-input"\r
                type="checkbox"\r
                role="switch"\r
                id="click-action"\r
                name="click-action"\r
                [ngModel]="config.clickable"\r
                (ngModelChange)="config.clickable = !!$event">\r
            <label class="form-check-label"\r
                for="click-action">Click action</label>\r
        </div>\r
\r
        <br>\r
\r
        <button type="button"\r
            class="btn btn-primary"\r
            (click)="resetDropzone()">Reset upload area</button>\r
    </div>\r
    <div class="col demo-dz-column">\r
        <h3 class="h5">Dropzone</h3>\r
        @if (type == 'directive') {\r
        <div class="dropzone dropzone-container"\r
            [nxtDropzone]="config"\r
            [disabled]="disabled"\r
            (init)="onUploadInit($event)"\r
            (error)="onUploadError($event)"\r
            (success)="onUploadSuccess($event)"></div>\r
        } @else {\r
        <nxt-dropzone class="dropzone-container"\r
            [config]="config"\r
            [disabled]="disabled"\r
            message="Click or drag images here to upload"\r
            (init)="onUploadInit($event)"\r
            (error)="onUploadError($event)"\r
            (success)="onUploadSuccess($event)"></nxt-dropzone>\r
        }\r
\r
    </div>\r
</div>\r
`;export{i as default};
