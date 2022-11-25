import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from './app/planets/planets/planets.component';
import { HomeComponent } from './app/home/home/home.component';

const routes: Routes = [
  { path: 'planets', component: PlanetsComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
