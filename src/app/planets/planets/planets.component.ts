import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent implements OnInit {
  constructor(public service: PlanetsService) {}

  ngOnInit() {}
}
