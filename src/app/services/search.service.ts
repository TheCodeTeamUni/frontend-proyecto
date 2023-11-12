import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

private backUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

getSearch(skill:string, token: string): Observable<any> {
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.get<any>(`${this.backUrl}abcjobs/search/${skill}`, {
    headers: headers,
  });
}

}
