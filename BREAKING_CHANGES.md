# Breaking changes

## v21

-   **all**: convert to signal-based change detection
-   **all**: deprecate module imports, convert to standalone components and services
-   **nxt-highlightjs**: deprecate async API on HighlightJS service; use signal for direct access to hljs API
-   **nxt-highlightjs/extras**: deprecate pipes and directives; use resource-based file and gist loaders

## v16

-   **nxt-color-picker:** rename `addColorButton` => `presetColorsEditable`, improve typing
-   **nxt-dropzone-wrapper:** improve typing for options and events, use types from `dropzone.js`
-   **nxt-pick-datetime:** improve type safety of adapter modules
-   **nxt-pick-datetime:** `<nxt-date-time>` add `isOpen`, `isOpenChange` two-way binding
-   **nxt-pick-datetime:** `<nxt-date-time>` rename `afterPickerOpen` => `open`, `afterPickerClosed` => `close`
-   **nxt-sortablejs:** rename `[sortablejs]` selector to `[nxtSortablejs]` for consistency
-   **nxt-sortablejs:** rename `sortablejsOptions` => `config`, `sortablejsInit` => `init`, `sortablejsCloneFunction` => `cloneFunction`
-   **nxt-sortablejs:** improve input type safety

## v15

-   **nxt-color-picker:** rename `cp => nxt`, remove `cp` prefixes for property names
-   **nxt-dropzone-wrapper:** add `NXT_` prefix to dropzone config injection token
-   **nxt-dropzone-wrapper:** renamed `<dropzone>` to `<nxt-dropzone>` and `[dropzone]` to `[nxtDropzone]`
-   **nxt-json-view:** rename `NxtJsonViewModule` to `JsonViewModule`
