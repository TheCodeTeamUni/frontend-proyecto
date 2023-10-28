import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AspirantInformationService {

private backUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }


addPersonalInfo(info:any, token: string): Observable<any> {
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.post<any>(`${this.backUrl}abcjobs/aspirantes/personal`, info, {
    headers: headers,
  });
}

}
