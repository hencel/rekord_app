import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Data } from '../models/dataModel';

@Injectable({
  providedIn: 'any',
})
export class ConfigService {
  constructor(private http: HttpClient) { }

  private url: string = 'https://api-football-standings.azharimm.dev/leagues/eng.1/standings?season=2021&sort=asc';

  getData(): Observable<Data> {
    return this.http.get<Data>(this.url)
  }

}