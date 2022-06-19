import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsmapComponent } from './jsmap/jsmap.component';
import { MappositionComponent } from './mapposition/mapposition.component';
import { HeaderComponent } from './header/header.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MarcadoresComponent } from './marcadores/marcadores.component';

@NgModule({
  declarations: [
    AppComponent,
    JsmapComponent,
    MappositionComponent,
    HeaderComponent,
    MarcadoresComponent
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
