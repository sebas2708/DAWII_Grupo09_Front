import { ApplicationConfig } from '@angular/core';
import { provideRouter, CanActivateFn } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, HTTP_INTERCEPTORS, withInterceptorsFromDi} from '@angular/common/http';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { AuthGuard } from './helpers/auth.guard';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch(),withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ]
};