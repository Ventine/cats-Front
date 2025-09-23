import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config';
import { App } from './app/app';
import 'zone.js'; // Required by Angular

bootstrapApplication(App, config)
  .catch((err) => console.error(err));
