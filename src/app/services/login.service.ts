import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private backUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  login(login: Login): Observable<any> {
    return this.http.post<Login>(`${this.backUrl}abcjobs/login
    `, login);
  }
}
