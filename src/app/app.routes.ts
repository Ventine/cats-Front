import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/components/home/HomeComponent').then(m => m.HomeComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
