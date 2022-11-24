import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Planet {
  name: string;
  terrain: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  baseUrl: string = 'https://swapi.dev/api/';

  constructor(public http: HttpClient) {}

  getPlanets() {
    return this.http.get<any>(`${this.baseUrl}planets`);
  }
}
