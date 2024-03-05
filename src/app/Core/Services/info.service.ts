import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Object } from '../Interfaces/object';
import { Delete } from '../Interfaces/delete';
import { Post } from '../Interfaces/post';
import { Update } from '../Interfaces/update';


@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private apiUrl = 'http://127.0.0.1:8000/api/equipos/index';

  private apiUrlDelete = 'http://127.0.0.1:8000/api/equipos/destroy/';

  private apiUrlStore = 'http://127.0.0.1:8000/api/equipos/store';

  private apiUrlUpdate = 'http://127.0.0.1:8000/api/equipos/update/';


  constructor(private http: HttpClient) { }

  obtenerEquipo(): Observable<Object[]> {
    return this.http.get<Object[]>(this.apiUrl);
  }

  eliminarequipo(id: number): Observable<Delete> {
    const deleteUrl = `${this.apiUrlDelete}${id}`;
    console.log(deleteUrl);
    return this.http.delete<Delete>(deleteUrl);
  }

  crearequipo(nombre: string, apodo : string, fundacion:string): Observable<Post> {
    const storeUrl = `${this.apiUrlStore}`;
    console.log(storeUrl);
    return this.http.post<Post>(storeUrl, {nombre, apodo, fundacion});
  }

  actualizarequipo(id: number, equipo: Object): Observable<Update> {
    const updateUrl = `${this.apiUrlUpdate}${id}`;
    console.log(updateUrl);
    return this.http.post<Update>(updateUrl, equipo);
  }
}
