import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}     from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { ChaptersComponent }  from './chapters.component';
import { BonusComponent }  from './bonus.component';
import { MainComponent } from './main.component';

import { ChaptersService }  from './chapters.service';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    ChaptersComponent,
    BonusComponent,
    MainComponent
  ],
  providers: [
    ChaptersService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
