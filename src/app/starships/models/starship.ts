export interface StarshipDto {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  const_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_athmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: any;
  pilots: any;
  url: string;
  created: string;
  edited: string;
}

export interface Starship {
  name: string;
  model: string;
  starshipClass: string;
  manufacturer: string;
  constInCredits: string;
  length: string;
  crew: string;
  passengers: string;
  maxAthmospheringSpeed: string;
  hyperdriveRating: string;
  mglt: string;
  cargoCapacity: string;
  consumables: string;
  films: any;
  pilots: any;
  url: string;
  created: string;
  edited: string;
}

export interface StarshipsDto {
  count: number;
  next: string;
  previous: string;
  results: StarshipDto[];
}
