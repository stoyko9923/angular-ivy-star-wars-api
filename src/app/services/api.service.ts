import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Planet {
  name: string;
  terrain: string;
}

@Injectable({ providedIn: 'root' })
export abstract class ApiService {
  baseUrl: string = 'https://swapi.dev/api/';

  constructor(protected http: HttpClient) {}
}
