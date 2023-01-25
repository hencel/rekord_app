import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './ranking.component';
import { RankingResolver } from './rankingResolver';

const routes: Routes = [{ 
  path: '', 
  component: RankingComponent, 
  resolve: { ranking: RankingResolver }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingRoutingModule { }
