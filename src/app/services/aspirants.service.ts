import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AspirantsService {

  private backUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAspirant(id: string, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });

    const url = `${this.backUrl}abcjobs/search/aspirant/${id}`;

    return this.http.get<any>(url, { headers });
  }
}
