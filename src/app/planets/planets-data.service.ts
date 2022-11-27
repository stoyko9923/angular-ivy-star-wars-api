import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { convertPlanetDto } from './helpers/helpers';
import { Planet, PlanetDto, PlanetsDto } from './models/planet';

@Injectable({ providedIn: 'root' })
export class PlanetsDataService extends ApiService {
  getPlanets() {
    return this.http
      .get<PlanetsDto>(`${this.baseUrl}planets`)
      .pipe(map((data) => data.results.map((p) => convertPlanetDto(p))));
  }

  getPlanet(id: number) {
    return this.http
      .get<PlanetDto>(`${this.baseUrl}planets/${id}`)
      .pipe(map((p) => convertPlanetDto(p)));
  }
}

