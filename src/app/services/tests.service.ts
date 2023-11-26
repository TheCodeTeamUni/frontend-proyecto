import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  private backUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  addTest(info: any, token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<any>(
      `${this.backUrl}abcjobs/company/test`,
      info,
      {
        headers: headers,
      }
    );
  }

  getCompanyTest(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.backUrl}abcjobs/company/test`, {
      headers: headers,
    });
  }


  getAspirantTest(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.backUrl}abcjobs/aspirant/test`, {
      headers: headers,
    });
  }






}
