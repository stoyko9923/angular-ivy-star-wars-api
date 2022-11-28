import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetComponent } from './planet/planet.component';
import { PlanetsComponent } from './planets/planets.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material.module';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';

const components = [PlanetsComponent, PlanetComponent, PlanetDetailsComponent];

@NgModule({
  imports: [CommonModule, AppRoutingModule, MaterialModule],
  declarations: components,
  exports: components,
})
export class PlanetsModule {}
