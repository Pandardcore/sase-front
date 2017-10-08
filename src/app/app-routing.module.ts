import { NgModule }      from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { ChaptersComponent }  from './chapters.component';
import { BonusComponent } from './bonus.component';

const routes: Routes = [
  { path: '', redirectTo: '/read', pathMatch: 'full' },
  { path: 'read', component: ChaptersComponent },
  { path: 'read/:id', component: ChaptersComponent },
  { path: 'bonus', component: BonusComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})

export class AppRoutingModule {}
