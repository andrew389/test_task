import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter} from "@angular/router";
import routeConfig from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {HttpClientModule, provideHttpClient, withFetch} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";

bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(routeConfig),
      provideAnimationsAsync(),
      provideHttpClient(withFetch()),
      importProvidersFrom(HttpClientModule)
    ]
  }
).catch(err => console.error(err));
