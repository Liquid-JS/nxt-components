import { isDevMode, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServiceWorkerModule } from '@angular/service-worker'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ContentWrapComponent } from './content-wrap/content-wrap.component'
import { HomeComponent } from './home/home.component'

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        }),
        ContentWrapComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
