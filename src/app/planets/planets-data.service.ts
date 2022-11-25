import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable({ providedIn: 'root' })
export class PlanetsDataService extends ApiService {
  getPlanets() {
    return this.http.get<any>(`${this.baseUrl}planets`);
  }
}
