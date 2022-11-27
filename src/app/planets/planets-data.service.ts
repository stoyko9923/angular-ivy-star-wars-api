import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { Planet, PlanetDto, PlanetsDto } from './models/planet';

@Injectable({ providedIn: 'root' })
export class PlanetsDataService extends ApiService {
  getPlanets() {
    return this.http.get<PlanetsDto>(`${this.baseUrl}planets`).pipe(
      map((data) => {
        return data.results.map(
          (p) =>
            ({
              ...p,
              orbitalPeriod: p.orbital_period,
              rotationPeriod: p.rotation_period,
            } as Planet)
        );
      })
    );
  }

  getPlanet(id: number) {
    return this.http.get<PlanetDto>(`${this.baseUrl}planets/${id}`).pipe(
      map(
        (p) =>
          ({
            ...p,
            orbitalPeriod: p.orbital_period,
            rotationPeriod: p.rotation_period,
          } as Planet)
      )
    );
  }
}
