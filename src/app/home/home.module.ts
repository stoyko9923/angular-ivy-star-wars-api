import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { PlanetsModule } from '../planets/planets.module';
import { StarshipsModule } from '../starships/starships.module';

@NgModule({
  imports: [CommonModule, AppRoutingModule, PlanetsModule, StarshipsModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
