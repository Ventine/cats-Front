import { Routes } from '@angular/router';
import { HomeComponent } from './features/components/HomeComponent';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];
