import { A11yModule } from '@angular/cdk/a11y'
import { OverlayModule } from '@angular/cdk/overlay'
import { PortalModule } from '@angular/cdk/portal'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NxtDialogContainerComponent } from './dialog-container/dialog-container.component'
import { NxtDialogService, NXT_DIALOG_SCROLL_STRATEGY_PROVIDER } from './dialog.service'

@NgModule({
    declarations: [
        NxtDialogContainerComponent
    ],
    imports: [
        CommonModule,
        A11yModule,
        OverlayModule,
        PortalModule
    ],
    providers: [
        NXT_DIALOG_SCROLL_STRATEGY_PROVIDER,
        NxtDialogService
    ]
})
export class NxtDialogModule { }
