import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from '../../planets/models/planet';
import { PlanetsService } from '../../planets/planets.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  planets$: Observable<Planet[]>;
  constructor(public planetService: PlanetsService) {}

  ngOnInit() {
    this.getPlanets();
  }

  getPlanets() {
    this.planets$ = this.planetService.planets$;
  }

  waza() {
    return 13;
  }
}
