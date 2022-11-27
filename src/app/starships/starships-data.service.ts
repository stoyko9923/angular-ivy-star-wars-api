import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { convertStarshipDto } from './helpers/helpers';
import { StarshipDto, StarshipsDto } from './models/starship';

@Injectable({ providedIn: 'root' })
export class StarshipsDataService extends ApiService {
  getStarships() {
    return this.http
      .get<StarshipsDto>(`${this.baseUrl}starships`)
      .pipe(map((data) => data.results.map((p) => convertStarshipDto(p))));
  }

  getStarship(id: number) {
    return this.http
      .get<StarshipDto>(`${this.baseUrl}starships/${id}`)
      .pipe(map((p) => convertStarshipDto(p)));
  }
}
