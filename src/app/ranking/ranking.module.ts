import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableFilterPipe } from './filter.pipe';


import { RankingRoutingModule } from './ranking-routing.module';
import { RankingComponent } from './ranking.component';


@NgModule({
  declarations: [
    RankingComponent,
    TableFilterPipe
  ],
  imports: [
    CommonModule,
    RankingRoutingModule,
    FormsModule,
  ]
})
export class RankingModule { }
