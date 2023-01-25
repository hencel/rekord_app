import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent {
  url: string = 'https://api-football-standings.azharimm.dev/leagues/eng.1/standings?season=2021&sort=asc';

  constructor(private http: HttpClient) {}

  getData(): void {
    this.http.get(this.url).subscribe((res) => {
      console.log(res)
    })
  }
}