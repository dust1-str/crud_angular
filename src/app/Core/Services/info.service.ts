import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Object } from '../Interfaces/object';
import { Delete } from '../Interfaces/delete';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private apiUrl = 'http://127.0.0.1:8000/api/equipos/index';

  private apiUrlDelete = 'http://127.0.0.1:8000/api/equipos/destroy/';

  constructor(private http: HttpClient) { }

  obtenerEquipo(): Observable<Object[]> {
    return this.http.get<Object[]>(this.apiUrl);
  }

  eliminarequipo(id: number): Observable<Delete> {
    const deleteUrl = `${this.apiUrlDelete}${id}`;
    console.log(deleteUrl);
    return this.http.delete<Delete>(deleteUrl);
  }

}
