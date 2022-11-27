import { Planet, PlanetDto } from '../models/planet';

export function convertPlanetDto(planetDto: PlanetDto) {
  return {
    ...planetDto,
    orbitalPeriod: planetDto.orbital_period,
    rotationPeriod: planetDto.rotation_period,
  } as Planet;
}
