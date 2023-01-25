import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Data } from '../models/dataModel';
import { ConfigService } from '../service/service';

@Injectable({ providedIn: 'root' })
export class RankingResolver implements Resolve<Data> {
  constructor(private service: ConfigService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Data>|Promise<Data>|Data {
    return this.service.getData();
  }
}