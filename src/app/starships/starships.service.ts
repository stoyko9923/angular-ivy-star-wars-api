import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Starship } from './models/starship';
import { StarshipsDataService } from './starships-data.service';

@Injectable({ providedIn: 'root' })
export class StarshipsService {
  starships$: Observable<Starship[]>;

  constructor(private api: StarshipsDataService) {
    this.getStarships();
  }

  getStarships() {
    this.starships$ = this.api.getStarships();
  }

  getStarshipId(starship: Starship) {
    let url = starship.url;
    let strings = url.split('/');
    return strings[strings.length - 2];
  }
}
