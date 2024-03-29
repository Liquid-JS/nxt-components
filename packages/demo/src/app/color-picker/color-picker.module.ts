import { OverlayContainer } from '@angular/cdk/overlay'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { ColorPickerModule } from 'nxt-color-picker'
import { CodeBlockComponent } from '../code-block/code-block.component'
import { ContentWrapComponent } from '../content-wrap/content-wrap.component'
import { ExampleComponent } from '../example/example.component'
import { InputsTableComponent } from '../inputs-table/inputs-table.component'
import { MetaModule } from '../meta/meta.module'
import { OutputsTableComponent } from '../outputs-table/outputs-table.component'
import { AppColorPickerRoutingModule } from './color-picker-routing.module'
import { AppColorPickerComponent, AppColorPickerWrapComponent } from './color-picker/color-picker.component'
import { AlphaChannelComponent } from './examples/alpha-channel/alpha-channel.component'
import { AsComponentComponent } from './examples/as-component/as-component.component'
import { BaicExampeComponent } from './examples/basic-example/basic-example.component'
import { CancelButtonComponent } from './examples/cancel-button/cancel-button.component'
import { ChangeEventComponent } from './examples/change-event/change-event.component'
import { ColorPresetComponent } from './examples/color-preset/color-preset.component'
import { DialogOffsetComponent } from './examples/dialog-offset/dialog-offset.component'
import { DialogPositionComponent } from './examples/dialog-position/dialog-position.component'
import { GrayscaleModeComponent } from './examples/grayscale-mode/grayscale-mode.component'
import { ManagePresetComponent } from './examples/manage-preset/manage-preset.component'
import { OkButtonComponent } from './examples/ok-button/ok-button.component'
import { OutputFormatComponent } from './examples/output-format/output-format.component'
import { ShowColorComponent } from './examples/show-color/show-color.component'
import { ToggleButtonComponent } from './examples/toggle-button/toggle-button.component'
import { GettingStartedComponent } from './getting-started/getting-started.component'

@NgModule({
    declarations: [
        AppColorPickerComponent,
        BaicExampeComponent,
        GrayscaleModeComponent,
        ShowColorComponent,
        OutputFormatComponent,
        DialogPositionComponent,
        AppColorPickerWrapComponent,
        DialogOffsetComponent,
        CancelButtonComponent,
        OkButtonComponent,
        ChangeEventComponent,
        ColorPresetComponent,
        ManagePresetComponent,
        ToggleButtonComponent,
        AlphaChannelComponent,
        AsComponentComponent,
        GettingStartedComponent
    ],
    imports: [
        CommonModule,
        ColorPickerModule,
        AppColorPickerRoutingModule,
        ContentWrapComponent,
        ExampleComponent,
        BsDropdownModule,
        CodeBlockComponent,
        InputsTableComponent,
        OutputsTableComponent,
        MetaModule
    ],
    providers: [{
        provide: OverlayContainer,
        useClass: AppColorPickerWrapComponent
    }]
})
export class AppColorPickerModule { }
