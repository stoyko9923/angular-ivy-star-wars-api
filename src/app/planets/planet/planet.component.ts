import { Component, Input, OnInit } from '@angular/core';
import { Planet } from '../models/planet';

@Component({
  selector: 'planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css'],
})
export class PlanetComponent implements OnInit {
  @Input() planet: Planet;

  constructor() {}

  ngOnInit() {}
}
