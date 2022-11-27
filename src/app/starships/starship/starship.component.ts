import { Component, Input, OnInit } from '@angular/core';
import { Starship } from '../models/starship';

@Component({
  selector: 'starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css'],
})
export class StarshipComponent implements OnInit {
  @Input() starship: Starship;

  constructor() {}

  ngOnInit() {}
}
