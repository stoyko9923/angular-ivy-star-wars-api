import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Planet } from '../models/planet';
import { PlanetsDataService } from '../planets-data.service';

@Component({
  selector: 'planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css'],
})
export class PlanetDetailsComponent implements OnInit {
  @Input() planet: Planet;

  constructor() {}

  ngOnInit() {
    this.getPlanet();
  }

  getPlanet() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getPlanet(id).subscribe((planet) => (this.planet = planet));
  }
}
