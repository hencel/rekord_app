import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main-page', component: MainComponent },
  { path: 'ranking', loadChildren: () => import('./ranking/ranking.module').then(m => m.RankingModule) },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  



exports: [RouterModule]
})
export class AppRoutingModule { }
