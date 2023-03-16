import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AccessibilityComponent } from './accessibility/accessibility.component'
import { GettingStartedComponent } from './getting-started/getting-started.component'
import { AppPickDatetimeComponent } from './pick-datetime/pick-datetime.component'
import { ValidationComponent } from './validation/validation.component'

const routes: Routes = [
    { path: '', pathMatch: 'full', component: AppPickDatetimeComponent },
    { path: 'getting-started', component: GettingStartedComponent },
    { path: 'accessibility', component: AccessibilityComponent },
    { path: 'validation', component: ValidationComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppPickDatetimeRoutingModule { }
