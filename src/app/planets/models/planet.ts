export interface PlanetDto {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: any;
  films: any;
  url: string;
  created: string;
  edited: string;
}

export interface Planet {
  name: string;
  diameter: string;
  rotationPeriod: string;
  orbitalPeriod: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: any;
  films: any;
  url: string;
  created: string;
  edited: string;
}

export interface PlanetsDto {
  count: number;
  next: string;
  previous: string;
  results: PlanetDto[];
}
