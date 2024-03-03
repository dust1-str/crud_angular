import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Objeto } from '../Interfaces/objeto';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = 'http://127.0.0.1:8000/api/empleado';

  constructor(private http: HttpClient) { }

  obtenerEmpleados(): Observable<Objeto[]> {
    return this.http.get<Objeto[]>(this.apiUrl);
  }
}
