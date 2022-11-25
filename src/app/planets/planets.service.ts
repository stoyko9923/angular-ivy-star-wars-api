import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PlanetsDataService } from './planets-data.service';

@Injectable({ providedIn: 'root' })
export class PlanetsService {
  planets$: Observable<any>;

  constructor(private api: PlanetsDataService) {
    this.getPlanets();
  }

  getPlanets() {
    // return this.api.getPlanets().pipe(map((data) => data.results));
    this.planets$ = this.api.getPlanets().pipe(map((data) => data.results));
  }
}
