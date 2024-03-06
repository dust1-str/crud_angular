import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../Interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  login(email: string, password: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/login';
    return this.http.post<Login>(url, { email, password });
  }

  isAuth(): Observable<any> {
    let url = 'http://127.0.0.1:8000/api/verificar';
    return this.http.get<any>(url);
  }


}
