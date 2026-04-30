import { ApplicationConfig, InjectionToken, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
export const APP_CONFIG = new InjectionToken<any>('APP_CONFIG');
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { 
      provide: APP_CONFIG,
      useValue: {
        apiUrl: "https://apps.foodsted.com/api/foodsted/aj/",
        branch_id: 768,
        siteName: "Shaahi Mahal",
          "discountCode": "DISCOUNT5",
          "discountMessage": {
            "en": "",
            "no": ":"
          },
          "OtherMessage1": {
            "en": "",
            "no": ""
          },
          "OtherMessage2": {
            "en": "",
            "no": ""
          },
          "timeing": {}
      }
    }
  ]
};