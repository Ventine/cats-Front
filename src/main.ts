import 'zone.js'; // Required by Angular
import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, config)
  .catch((err) => console.error(err));
