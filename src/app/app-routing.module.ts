import { NgModule }      from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { CharactersComponent }  from './characters.component';
import { ChaptersComponent }  from './chapters.component';
import { HeroDetailsComponent } from './hero-details.component';
import { BonusComponent } from './bonus.component';

const routes: Routes = [
  { path: '', redirectTo: '/read', pathMatch: 'full' },
  { path: 'read', component: ChaptersComponent },
  { path: 'read/:id', component: ChaptersComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'bonus', component: BonusComponent },
  { path: 'detail/:id', component: HeroDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})

export class AppRoutingModule {}
