import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private backUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  addProject(info: any, token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<any>(
      `${this.backUrl}abcjobs/company/project`,
      info,
      {
        headers: headers,
      }
    );
  }

  getProject(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.backUrl}abcjobs/company/project`, {
      headers: headers,
    });
  }


  addAspirantToProject(info: any, token: string, projectId:string,): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<any>(
      `${this.backUrl}abcjobs/company/project/${projectId}`,
      info,
      {
        headers: headers,
      }
    );
  }


  getAspirantProject(token: string, projectId:string,): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.backUrl}abcjobs/company/project/${projectId}`, {
      headers: headers,
    });
  }


}
