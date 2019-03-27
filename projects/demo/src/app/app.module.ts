import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ColorPickerModule } from 'projects/nxt-color-picker/src/public-api'
import { AppComponent } from './app.component'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ColorPickerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
