import { Injectable } from '@angular/core';
// HttpClient
import { HttpClient, HttpHeaders } from '@angular/common/http';
// rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getAllEvents(query = {}): Observable<any> {
    return this.http.get<any>('https://rickandmortyapi.com/api/character');
  }
}
