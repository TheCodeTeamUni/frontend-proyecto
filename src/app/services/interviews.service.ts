import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterviewsService {

private backUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }


addInterview(info: any, token: string): Observable<any> {
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.post<any>(
    `${this.backUrl}abcjobs/company/interview`,
    info,
    {
      headers: headers,
    }
  );
}


getCompanyInterviews(token: string): Observable<any> {
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.get<any>(`${this.backUrl}abcjobs/company/interview`, {
    headers: headers,
  });
}


getAspirantInterviews(token: string): Observable<any> {
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.get<any>(`${this.backUrl}abcjobs/aspirant/interview`, {
    headers: headers,
  });
}



}
