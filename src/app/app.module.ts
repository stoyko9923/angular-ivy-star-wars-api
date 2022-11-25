import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetsModule } from './planets/planets.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, PlanetsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
