import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { PlanetDetailsComponent } from './planets/planet-details/planet-details.component';
import { StarshipDetailsComponent } from './starships/starship-details/starship-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'planets', component: PlanetsComponent },
  // { path: 'starships', component: StarshipsComponent },
  { path: 'planets/:id', component: PlanetDetailsComponent },
  { path: 'starships/:id', component: StarshipDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
