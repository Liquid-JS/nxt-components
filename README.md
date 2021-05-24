# Angular Color Picker

<a href="https://badge.fury.io/js/nxt-color-picker"><img src="https://badge.fury.io/js/nxt-color-picker.svg" align="right" alt="yarn version" height="18"></a>

This is a responsive color picker based on [angular2-color-picker](https://github.com/Alberplz/angular2-color-picker) and updates from [ngx-color-picker](https://github.com/zefoy/ngx-color-picker).

#### Why another rewrite?

-   **Responsive**: nxt-color-picker uses CSS and flex layout to ensure pixel-perfect rendering on all screen sizes and resolutions
-   **UX improvements**:
    -   slider indicator changes color based on background to maintain visibility
    -   preset colours show alpha
    -   proper support for mobile browsers
-   **Type safe**: by replacing string options with enumerators, compiler can ensure you always pass correct options to nxt-color-picker
-   **Built with Angular CLI** to make nxt-color-picker development and testing a single-step process

### Quick links

[Example application](https://liquid-js.github.io/nxt-color-picker/en-US/)

### Building the library

```bash
yarn
yarn build
```

### Running the app

```bash
yarn
yarn start
```

### Installing and usage

```bash
yarn add nxt-color-picker
```

##### Load the module for your app:

```javascript
import { ColorPickerModule } from 'nxt-color-picker';

@NgModule({
  ...
  imports: [
    ...
    ColorPickerModule
  ]
})
```

##### Use it in your HTML template:

```html
<input [(cpColor)]="color" [style.background]="color"/>
```

```javascript
[cpColor]                    // The color to show in the color picker dialog.

[cpWidth]                    // Use this option to set color picker dialog width ('230px').
[cpHeight]                   // Use this option to force color picker dialog height ('auto').

[cpToggle]                   // Sets the default open / close state of the color picker (false).
[cpDisabled]                 // Disables opening of the color picker dialog via toggle / events.

[cpMode]                     // Dialog color mode: 'color', 'grayscale', 'presets' ('color').

[cpOutputFormat]             // Output color format: OutputFormat (OutputFormat.auto).
[cpAlphaChannel]             // Alpha mode: AlphaChannel (AlphaChannel.enabled).
[cpFallbackColor]            // Used when the color is not well-formed or is undefined ('#000').

[cpPosition]                 // Dialog position: DialogPosition (DialogPosition.right).
[cpPositionOffset]           // Dialog offset percentage relative to the directive element (0%).
[cpPositionRelativeToArrow]  // Dialog position is calculated relative to dialog arrow (false).

[cpPresetLabel]              // Show label for preset colors (true).
[cpPresetColors]             // Array of preset colors to show in the color picker dialog ([]).

[cpDisableInput]             // Disables / hides the color input field from the dialog (false).

[cpDialogDisplay]            // Dialog positioning mode: DialogDisplay (DialogDisplay.popup).
                             //   DialogDisplay.popup: dialog is shown as popup (fixed positioning).
                             //   DialogDisplay.inline: dialog is shown permanently (static positioning).

[cpIgnoredElements]          // Array of HTML elements that will be ignored when clicked ([]).

[cpSaveClickOutside]         // Save currently selected color when user clicks outside (true).
[cpCloseClickOutside]        // Close the color picker dialog when user clicks outside (true).

[cpOKButton]                 // Show an OK / Apply button which saves the color (false).

[cpCancelButton]             // Show a Cancel / Reset button which resets the color (false).

[cpAddColorButton]           // Show an Add Color button which add the color into preset (false).

[cpMaxPresetColors]          // Use this option to set the max colors allowed in presets (6).

[cpUseRootViewContainer]     // Create dialog component in the root view container (false).
                             // Note: The root component needs to have public viewContainerRef.

(cpOpen)                     // Current color value, send when dialog is opened (value: string).
(cpClose)                    // Current color value, send when dialog is closed (value: string).

(cpInputChange)              // Input name and its value, send when user changes color through inputs (value: InputChangeEvent).

(cpToggleChange)             // Status of the dialog, send when dialog is opened / closed (open: boolean).

(cpSliderDragStart)          // Slider name and current color, send when slider dragging starts (value: SliderChangeEvent).
(cpSliderChange)             // Slider name and its value, send when user changes color through slider (value: SliderChangeEvent).
(cpSliderDragEnd)            // Slider name and current color, send when slider dragging ends (value: SliderChangeEvent).

(cpColorSelectCancel)        // Color select canceled, send when Cancel button is pressed (void).
(cpColorSelect)              // Selected color value, send when OK button pressed or user clicks outside (if cpSaveClickOutside is true). (value: string).
(cpColorChange)              // Changed color value, send when color is changed (value: string).

(cpPresetColorsChange)       // Preset colors, send when 'Add Color' button is pressed (value: array).
```

##### Available control / helper functions (provided by the directive):

```javascript
openDialog()                 // Opens the color picker dialog if not already open.
closeDialog()                // Closes the color picker dialog if not already closed.
```
