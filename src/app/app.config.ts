import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const config: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Aquí puedes agregar HttpClient, animations, etc.
    // provideHttpClient(),
    // provideAnimations()
  ],
};
