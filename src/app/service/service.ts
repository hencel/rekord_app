import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'any',
})
export class ConfigService {
  constructor(private http: HttpClient) { }

  private url: string = 'https://api-football-standings.azharimm.dev/leagues/eng.1/standings?season=2021&sort=asc';

  getData(): Observable<any> {
    return this.http.get<any>(this.url)
  }

}