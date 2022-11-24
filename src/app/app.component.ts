import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './services/api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  planets$: Observable<any>;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.planets$ = this.api.getPlanets().pipe(map((data) => data.results));
  }
}
