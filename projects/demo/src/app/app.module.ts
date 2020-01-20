import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { OwlDateTimeModule } from 'nxt-pick-datetime'
import { OwlNativeDateTimeModule } from 'nxt-pick-datetime/native-adapter'
import { AppComponent } from './app.component'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
