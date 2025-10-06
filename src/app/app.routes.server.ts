import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'blog/**',
    renderMode: RenderMode.Prerender  // Contenido estático
  },
  {
    path: 'dashboard/**',
    renderMode: RenderMode.Server     // Contenido dinámico
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender  // Fallback general
  }
];
