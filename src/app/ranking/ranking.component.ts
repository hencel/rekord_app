import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../service/service';
import { ApiData, Standing } from '../models/dataModel';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  private url: string = 'https://api-football-standings.azharimm.dev/leagues/eng.1/standings?season=2021&sort=asc';
  public apiData?: any;
  
  public name?: string;
  public season?: string;

  public filter: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute, private service: ConfigService) {}

  ngOnInit(): void {
    this.prepareData();
    // this.apiData = this.route.snapshot.data;
    // this.route.getData().subscribe((res) => 
    // {
    //   this.apiData = res;
    //   console.log(this.apiData);
    // });
  }

  prepareData():void {
    this.service.getData().subscribe((res) => 
      {
        this.apiData = res.data.standings;

        console.log(this.apiData);
        this.name = res.data.name;
        this.season = res.data.season;
      })
  }

  blurEvent(event: any){
    // this.filter = event.target.value;
    console.log(event.target.value)
  }
}