import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}     from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { ChaptersComponent }  from './chapters.component';
import { HeroDetailsComponent } from './hero-details.component';
import { CharactersComponent }  from './characters.component';
import { CharactersSearchComponent }  from './characters-search.component';
import { BonusComponent }  from './bonus.component';

import { CharactersService }  from './characters.service';
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
    HeroDetailsComponent,
    CharactersComponent,
    CharactersSearchComponent,
    BonusComponent
  ],
  providers: [
    CharactersService,
    ChaptersService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
