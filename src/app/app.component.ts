import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
})
export class AppComponent {
  endpoint = 'https://jsonplaceholder.typicode.com/posts?_limit=3';
  method = 'GET';
  methods = ['GET', 'POST', 'PUT', 'DELETE'];
  dataInput = '';
  response: any = 'Esperando respuesta...';
  loading = false;

  constructor(private api: ApiService) {}

  callApi() {
    this.loading = true;
    this.response = '⏳ Cargando...';
    let data;

    try {
      data = this.dataInput ? JSON.parse(this.dataInput) : {};
    } catch {
      this.response = '❌ Error: JSON inválido';
      this.loading = false;
      return;
    }

    this.api.callApi(this.endpoint, this.method, data).subscribe({
      next: res => {
        this.response = res;
        this.loading = false;
      },
      error: err => {
        this.response = '❌ Error: ' + err.message;
        this.loading = false;
      }
    });
  }
}
