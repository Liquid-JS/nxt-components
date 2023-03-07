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

[Example application](https://liquid-js.github.io/nxt-components/color-picker)

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
<input [(nxtColor)]="color" 
    [style.background]="color"/>
```

```javascript
[nxtColor]                  // The color to show in the color picker dialog.

[width]                     // Use this option to set color picker dialog width ('230px').
[height]                    // Use this option to force color picker dialog height ('auto').

[toggle]                    // Sets the default open / close state of the color picker (false).
[disabled]                  // Disables opening of the color picker dialog via toggle / events.

[mode]                      // Dialog color mode: 'color', 'grayscale', 'presets' ('color').

[cmykEnabled]               // Enables CMYK input format and color change event (false).

[outputFormat]              // Output color format: OutputFormat (OutputFormatEnum.auto).
[alphaChannel]              // Alpha mode: AlphaChannel (AlphaChannelEnum.enabled).
[fallbackColor]             // Used when the color is not well-formed or is undefined ('#000').

[position]                  // Dialog position: DialogPosition (DialogPositionEnum.right).
[positionOffset]            // Dialog offset percentage relative to the directive element (0).

[presetLabel]               // Show label for preset colors (true). If string is given, it overrides the default label.
[presetColors]              // Array of preset colors to show in the color picker dialog ([]).

[disableInput]              // Disables / hides the color input field from the dialog (false).

[dialogDisplay]             // Dialog positioning mode: DialogDisplay (DialogDisplayEnum.popup).
                            //   DialogDisplayEnum.popup: dialog is shown as popup (fixed positioning).
                            //   DialogDisplayEnum.inline: dialog is shown permanently (static positioning).

[ignoredElements]           // Array of HTML elements that will be ignored when clicked ([]).

[saveClickOutside]          // Save currently selected color when user clicks outside (true).
[closeClickOutside]         // Close the color picker dialog when user clicks outside (true).

[okButton]                  // Show an OK / Apply button which saves the color (false).

[cancelButton]              // Show a Cancel / Reset button which resets the color (false).

[addColorButton]            // Show an Add Color button which add the color into preset (false).

[maxPresetColors]           // Use this option to set the max colors allowed in presets (6).

[useRootViewContainer]      // Create dialog component in the root view container (false).
                            // Note: The root component needs to have public viewContainerRef.

(open)                      // Current color value, send when dialog is opened (value: string).
(close)                     // Current color value, send when dialog is closed (value: string).

(inputChange)               // Input name and its value, send when user changes color through inputs (value: InputChangeEvent).

(toggleChange)              // Status of the dialog, send when dialog is opened / closed (open: boolean).

(sliderDragStart)           // Slider name and current color, send when slider dragging starts (value: SliderChangeEvent).
(sliderChange)              // Slider name and its value, send when user changes color through slider (value: SliderChangeEvent).
(sliderDragEnd)             // Slider name and current color, send when slider dragging ends (value: SliderChangeEvent).

(colorSelectCancel)         // Color select canceled, send when Cancel button is pressed (void).
(colorSelect)               // Selected color value, send when OK button pressed or user clicks outside (if saveClickOutside is true). (value: string).
(nxtColorChange)            // Changed color value, send when color is changed (value: string).

(cmykColorChange)           // Outputs the color as CMYK string if CMYK is enabled (value: string).

(presetColorsChange)        // Preset colors, send when 'Add Color' button is pressed (value: array).
```

##### Available control / helper functions (provided by the directive):

```javascript
openDialog()                // Opens the color picker dialog if not already open.
closeDialog()               // Closes the color picker dialog if not already closed.
```
