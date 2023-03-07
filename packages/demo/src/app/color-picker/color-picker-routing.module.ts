import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppColorPickerComponent } from './color-picker.component'

const routes: Routes = [
    { path: '', component: AppColorPickerComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppColorPickerRoutingModule { }
