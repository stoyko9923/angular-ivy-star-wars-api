import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Planet } from '../models/planet';
import { PlanetsDataService } from '../planets-data.service';

@Component({
  selector: 'planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css'],
})
export class PlanetDetailsComponent implements OnInit {
  planet: Planet;
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, private api: PlanetsDataService) {}

  ngOnInit() {
    this.getPlanet();
  }

  getPlanet() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const subsciption = this.api
      .getPlanet(id)
      .subscribe((planet) => (this.planet = planet));

    this.subscriptions.push(subsciption);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
