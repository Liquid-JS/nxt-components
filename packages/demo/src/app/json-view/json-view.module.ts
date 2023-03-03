import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { NxtJsonViewModule } from 'nxt-json-view'
import { AppComponent } from './json-view.component'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NxtJsonViewModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }