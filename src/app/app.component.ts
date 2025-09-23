import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // 👈 esto es lo que faltaba
  template: `
    <h1>Welcome to CatsFront 🐾</h1>
    <router-outlet></router-outlet>
  `,
})
export class App {}
