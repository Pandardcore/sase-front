import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { CharactersService } from './characters.service';
import { Hero } from './hero';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls : [ './hero-details.component.css' ]
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero;

  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.charactersService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.charactersService.update(this.hero)
      .then(() => this.goBack());
  }
}
