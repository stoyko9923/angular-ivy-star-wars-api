import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../../app-routing.module';
import { PlanetsModule } from '../planets/planets.module';

@NgModule({
  imports: [CommonModule, AppRoutingModule, PlanetsModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
