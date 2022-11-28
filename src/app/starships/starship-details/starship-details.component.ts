import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Starship } from '../models/starship';
import { StarshipsDataService } from '../starships-data.service';

@Component({
  selector: 'starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css'],
})
export class StarshipDetailsComponent implements OnInit {
  starship: Starship;
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private api: StarshipsDataService
  ) {}

  ngOnInit() {
    this.getStarship();
  }

  getStarship() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const subsciption = this.api
      .getStarship(id)
      .subscribe((starship) => (this.starship = starship));

    this.subscriptions.push(subsciption);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
