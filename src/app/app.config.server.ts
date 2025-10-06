import { mergeApplicationConfig, ApplicationConfig, isDevMode } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes))
  ]
};

export const config: ApplicationConfig = mergeApplicationConfig(appConfig, serverConfig);

if (isDevMode()) {
  console.log('[SSR] Server configuration loaded successfully with routes:', serverRoutes);
}
