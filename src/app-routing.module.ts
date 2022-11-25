import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from './app/planets/planets/planets.component';
import { HomeComponent } from './app/home/home/home.component';
import { PlanetComponent } from './app/planets/planet/planet.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'planets', component: PlanetsComponent },
  { path: 'planets/:id', component: PlanetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
