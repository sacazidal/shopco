import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { baseUrlInterceptor } from './interceptors/base-url/base-url-interceptor';
import { responseErrorInterceptor } from './interceptors/response-error/response-error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([baseUrlInterceptor, responseErrorInterceptor])),
    provideZonelessChangeDetection(),
    provideRouter(routes),
  ],
};
