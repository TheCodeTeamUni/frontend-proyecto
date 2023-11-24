import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  private backUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  addPerformance(info: any, token: string, aspirantId:any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<any>(
      `${this.backUrl}abcjobs/performance/${aspirantId}`,
      info,
      {
        headers: headers,
      }
    );
  }

  getPerformance(token: string, aspirantId:string,): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.backUrl}abcjobs/performance/${aspirantId}`, {
      headers: headers,
    });
  }


}
