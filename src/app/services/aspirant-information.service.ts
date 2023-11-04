import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AspirantInformationService {
  private backUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  /* PERSONAL INFORMATION */

  addPersonalInfo(info: any, token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<any>(
      `${this.backUrl}abcjobs/aspirantes/personal`,
      info,
      {
        headers: headers,
      }
    );
  }

  getPersonalInfo(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.backUrl}abcjobs/aspirantes/personal`, {
      headers: headers,
    });
  }

  /* EDUCATION  */

  addEducation(info: any, token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<any>(
      `${this.backUrl}abcjobs/aspirantes/education`,
      info,
      {
        headers: headers,
      }
    );
  }

  getEducation(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.backUrl}abcjobs/aspirantes/education`, {
      headers: headers,
    });
  }

  /* WORK INFORMATION */

  addWorkInfo(info: any, token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<any>(
      `${this.backUrl}abcjobs/aspirantes/workexperience`,
      info,
      {
        headers: headers,
      }
    );
  }

  getWorkInfo(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(
      `${this.backUrl}abcjobs/aspirantes/workexperience`,
      {
        headers: headers,
      }
    );
  }

  /* SKILLS */

  addSkill(info: any, token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<any>(
      `${this.backUrl}abcjobs/aspirantes/skill`,
      info,
      {
        headers: headers,
      }
    );
  }

  getSkill(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.backUrl}abcjobs/aspirantes/skill`, {
      headers: headers,
    });
  }
}
