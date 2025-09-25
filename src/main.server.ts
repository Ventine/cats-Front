import 'zone.js/node';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideServerRendering } from '@angular/platform-server';

export function bootstrap(): Promise<void> {
  return bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),
      provideServerRendering()
    ]
  })
    .then(() => {
      console.log('✅ SSR: aplicación inicializada correctamente');
    })
    .catch((err) => {
      console.error('❌ SSR: error durante el bootstrap', err);
      throw err;
    });
}

export default bootstrap;
