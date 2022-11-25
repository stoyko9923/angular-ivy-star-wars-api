import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PlanetsDataService } from '../planets-data.service';

@Component({
  selector: 'planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css'],
})
export class PlanetComponent implements OnInit {
  planet$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private api: PlanetsDataService
  ) // private location: Location
  {}

  ngOnInit() {
    this.getPlanet();
  }

  getPlanet() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.planet$ = this.api.getPlanet(id);
  }
}
