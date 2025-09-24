import 'zone.js/node'; // 👈 necesario en SSR para que Angular tenga NgZone

import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

export function bootstrap(): Promise<void> {
  return bootstrapApplication(App, config)
    .then(() => {
      console.log('✅ Application bootstrapped successfully');
    })
    .catch((err) => {
      console.error('❌ Bootstrap failed', err);
      throw err;
    });
}

export default bootstrap;
