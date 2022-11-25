import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetComponent } from './planet/planet.component';
import { PlanetsComponent } from './planets/planets.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PlanetsComponent],
  exports: [PlanetsComponent],
})
export class PlanetsModule {}
