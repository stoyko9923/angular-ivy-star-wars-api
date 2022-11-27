import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipComponent } from './starship/starship.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { AppRoutingModule } from '../../app-routing.module';
import { MaterialModule } from '../material.module';

const components = [
  StarshipsComponent,
  StarshipComponent,
  StarshipDetailsComponent,
];

@NgModule({
  imports: [CommonModule, AppRoutingModule, MaterialModule],
  declarations: components,
  exports: components,
})
export class StarshipsModule {}
