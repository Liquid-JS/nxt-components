import { Component, OnInit, Injector } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Cmyk, formatOutput, stringToCmyk, stringToHsva } from 'nxt-color-picker'
import { ExampleConfig } from '../../example/example.component'

@Component({
    selector: 'app-color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.scss']
})
export class AppColorPickerComponent implements OnInit {

    readonly basicExample = Promise.all([
        import('../examples/basic-example/basic-example.component'),
        import('../examples/basic-example/basic-example.component.html?raw'),
        import('../examples/basic-example/basic-example.component.ts?raw')
    ]).then(([{ BasicExampleComponent }, tpl, src]) => ({
        component: BasicExampleComponent,
        name: 'Basic usage',
        path: 'color-picker/examples/basic-example',
        template: tpl.default.trim(),
        source: src.default.trim()
    } as ExampleConfig))

    readonly grayscaleMode = Promise.all([
        import('../examples/grayscale-mode/grayscale-mode.component'),
        import('../examples/grayscale-mode/grayscale-mode.component.html?raw'),
        import('../examples/grayscale-mode/grayscale-mode.component.ts?raw')
    ]).then(([{ GrayscaleModeComponent }, tpl, src]) => ({
        component: GrayscaleModeComponent,
        name: 'Grayscale color mode',
        path: 'color-picker/examples/grayscale-mode',
        template: tpl.default.trim(),
        source: src.default.trim()
    } as ExampleConfig))

    readonly showColor = Promise.all([
        import('../examples/show-color/show-color.component'),
        import('../examples/show-color/show-color.component.html?raw'),
        import('../examples/show-color/show-color.component.ts?raw')
    ]).then(([{ ShowColorComponent }, tpl, src]) => ({
        component: ShowColorComponent,
        name: 'Show the color in the input field',
        path: 'color-picker/examples/show-color',
        template: tpl.default.trim(),
        source: src.default.trim()
    } as ExampleConfig))

    readonly outputFormat = Promise.all([
        import('../examples/output-format/output-format.component'),
        import('../examples/output-format/output-format.component.html?raw'),
        import('../examples/output-format/output-format.component.ts?raw')
    ]).then(([{ OutputFormatComponent }, tpl, src]) => ({
        component: OutputFormatComponent,
        name: 'Output format',
        path: 'color-picker/examples/output-format',
        template: tpl.default.trim(),
        source: src.default.trim()
    } as ExampleConfig))

    readonly dialogPosition = Promise.all([
        import('../examples/dialog-position/dialog-position.component'),
        import('../examples/dialog-position/dialog-position.component.html?raw'),
        import('../examples/dialog-position/dialog-position.component.ts?raw')
    ]).then(([{ DialogPositionComponent }, tpl, src]) => ({
        component: DialogPositionComponent,
        name: 'Changing dialog position',
        path: 'color-picker/examples/dialog-position',
        template: tpl.default.trim(),
        source: src.default.trim()
    } as ExampleConfig))

    toggle: boolean = false

    rgbaText: string = 'rgba(165, 26, 214, 0.2)'

    arrayColors: any = {
        color1: '#2883e9',
        color2: '#e920e9',
        color3: 'rgb(255,245,0)',
        color4: 'rgb(236,64,64)',
        color5: 'rgba(45,208,45,1)'
    }

    selectedColor: string = 'color1'

    color1: string = '#2889e9'
    color2: string = '#e920e9'
    color3: string = '#fff500'
    color4: string = 'rgb(236,64,64)'
    color5: string = 'rgba(45,208,45,1)'
    color6: string = '#1973c0'
    color7: string = '#f200bd'
    color8: string = '#a8ff00'
    color9: string = '#278ce2'
    color10: string = '#0a6211'
    color11: string = '#f2ff00'
    color12: string = '#f200bd'
    color13: string = 'rgba(0,255,0,0.5)'
    color14: string = 'rgb(0,255,255)'
    color15: string = 'rgb(255,0,0)'
    color16: string = '#a51ad633'
    color17: string = '#666666'
    color18: string = '#ff0000'

    cmykValue: string = ''

    cmykColor: Cmyk = new Cmyk(0, 0, 0, 0, 1)

    constructor(
        private readonly title: Title,
        readonly injector: Injector
    ) { }

    ngOnInit(): void {
        this.title.setTitle('nxt-color-picker')
    }

    onEventLog(event: string, data: any) {
        console.log(event, data)
    }

    onChangeColorCmyk(color: string) {
        const cmyk = stringToCmyk(color)
        return cmyk || new Cmyk(0, 0, 0, 0, 1)
    }

    onChangeColorHex8(color: string) {
        const hsva = stringToHsva(color, true)

        if (hsva) {
            return formatOutput(hsva, 'rgba')
        }

        return ''
    }
}
