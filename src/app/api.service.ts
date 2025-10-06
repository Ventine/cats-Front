import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  callApi<T>(endpoint: string, method: string, data?: any): Observable<T> {
    switch (method) {
      case 'GET': return this.http.get<T>(endpoint);
      case 'POST': return this.http.post<T>(endpoint, data);
      case 'PUT': return this.http.put<T>(endpoint, data);
      case 'DELETE': return this.http.delete<T>(endpoint);
      default: throw new Error('Método no soportado');
    }
  }
}
