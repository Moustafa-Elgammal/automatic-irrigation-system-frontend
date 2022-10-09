import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPlotsComponent } from './components/list-plots/list-plots.component';
import { AddPlotComponent } from './components/add-plot/add-plot.component';

import {FormsModule} from "@angular/forms";
import { UpdatePlotComponent } from './components/update-plot/update-plot.component'



@NgModule({
  declarations: [
    AppComponent,
    ListPlotsComponent,
    AddPlotComponent,
    UpdatePlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
