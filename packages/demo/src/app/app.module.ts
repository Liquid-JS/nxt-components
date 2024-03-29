import { isDevMode, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServiceWorkerModule } from '@angular/service-worker'
import { ScullyLibModule } from '@scullyio/ng-lib'
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ContentWrapComponent } from './content-wrap/content-wrap.component'
import { HomeComponent } from './home/home.component'
import { MetaModule } from './meta/meta.module'

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
        ContentWrapComponent,
        TooltipModule.forRoot(),
        ScullyLibModule,
        MetaModule
    ],
    providers: [
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
                languages: {
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    scss: () => import('highlight.js/lib/languages/scss'),
                    xml: () => import('highlight.js/lib/languages/xml'),
                    bash: () => import('highlight.js/lib/languages/bash'),
                    shell: () => import('highlight.js/lib/languages/shell'),
                    json: () => import('highlight.js/lib/languages/json')
                }
            }
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
