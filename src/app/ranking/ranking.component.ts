import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiData, Data } from '../models/dataModel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  private url: string = 'https://api-football-standings.azharimm.dev/leagues/eng.1/standings?season=2021&sort=asc';
  public apiData?: any;

  private name?: string;
  private season?: string;


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.prepareData();
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.url)
  }

  prepareData():void {
    this.getData().subscribe((res) => 
      {
        this.apiData = res;
        console.log(this.apiData);
      })
  }

}