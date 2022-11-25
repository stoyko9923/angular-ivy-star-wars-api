import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Planet } from '../models/planet';
import { PlanetsDataService } from '../planets-data.service';

@Component({
  selector: 'planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css'],
})
export class PlanetComponent implements OnInit {
  @Input() planet: Planet;

  constructor(
    private route: ActivatedRoute,
    private api: PlanetsDataService // private location: Location
  ) {}

  ngOnInit() {
    this.getPlanet();
  }

  getPlanet() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getPlanet(id).subscribe((planet) => (this.planet = planet));
  }
}
