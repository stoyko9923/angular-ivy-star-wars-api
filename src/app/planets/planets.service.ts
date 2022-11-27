import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Planet } from './models/planet';
import { PlanetsDataService } from './planets-data.service';

@Injectable({ providedIn: 'root' })
export class PlanetsService {
  planets$: Observable<Planet[]>;

  constructor(private api: PlanetsDataService) {
    this.getPlanets();
  }

  getPlanets() {
    this.planets$ = this.api.getPlanets();
  }

  getPlanetId(planet: Planet) {
    let url = planet.url;
    let strings = url.split('/');
    return strings[strings.length - 2];
  }
}
