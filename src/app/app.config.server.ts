// app.config.server.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideServerRendering } from '@angular/platform-server';

import { routes } from './app.routes';

export const appConfigServer: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideServerRendering(), // habilita SSR en Angular
  ],
};
