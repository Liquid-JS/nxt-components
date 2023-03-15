import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppColorPickerComponent } from './color-picker/color-picker.component'
import { GettingStartedComponent } from './getting-started/getting-started.component'

const routes: Routes = [
    { path: '', pathMatch: 'full', component: AppColorPickerComponent },
    { path: 'getting-started', component: GettingStartedComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppColorPickerRoutingModule { }
