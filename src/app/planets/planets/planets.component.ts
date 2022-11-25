import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent implements OnInit {
  planets$: Observable<any>;

  constructor(private service: PlanetsService) {}

  ngOnInit() {
    this.planets$ = this.service.planets$;
  }

  getPlanetId(planet: any) {
    let url = planet.url as string;
    let strings = url.split('/');
    return strings[strings.length - 2];
  }
}
