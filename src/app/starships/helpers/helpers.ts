import { Starship, StarshipDto } from '../models/starship';

export function convertStarshipDto(starshipDto: StarshipDto) {
  return {
    ...starshipDto,
    starshipClass: starshipDto.starship_class,
    constInCredits: starshipDto.const_in_credits,
    maxAthmospheringSpeed: starshipDto.max_athmosphering_speed,
    hyperdriveRating: starshipDto.hyperdrive_rating,
    mglt: starshipDto.MGLT,
    cargoCapacity: starshipDto.cargo_capacity,
  } as Starship;
}
