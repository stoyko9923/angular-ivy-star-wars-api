import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Planet } from '../models/planet';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent implements OnInit {
  planets$: Observable<Planet[]>;

  constructor(public service: PlanetsService) {}

  ngOnInit() {
    this.planets$ = this.service.planets$;
  }
}
