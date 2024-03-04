import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {
private apiUrl = 'http://127.0.0.1:8000/api/equipos/destroy/{id}';



constructor(private http:HttpClient) { }
}
