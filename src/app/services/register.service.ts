import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

private backUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }


register(user: any): Observable<Register> {
  return this.http.post<any>(`${this.backUrl}users/signup`, user);
}

}
