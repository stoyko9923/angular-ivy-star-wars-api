import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from '../../planets/models/planet';
import { PlanetsService } from '../../planets/planets.service';
import { Starship } from '../../starships/models/starship';
import { StarshipsService } from '../../starships/starships.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  planets$: Observable<Planet[]>;
  starships$: Observable<Starship[]>;

  constructor(
    public planetService: PlanetsService,
    public starshipService: StarshipsService
  ) {}

  ngOnInit() {
    this.getPlanets();
    this.getStarships();
  }

  getPlanets() {
    this.planets$ = this.planetService.planets$;
  }

  getStarships() {
    this.starships$ = this.starshipService.starships$;
  }
}
