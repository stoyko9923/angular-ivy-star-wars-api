import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetComponent } from './planet/planet.component';
import { PlanetsComponent } from './planets/planets.component';
import { AppRoutingModule } from '../../app-routing.module';
import { MaterialModule } from '../material.module';

const components = [PlanetsComponent, PlanetComponent];

@NgModule({
  imports: [CommonModule, AppRoutingModule, MaterialModule],
  declarations: components,
  exports: components,
})
export class PlanetsModule {}
