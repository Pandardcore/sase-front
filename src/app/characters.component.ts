import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { CharactersService } from './characters.service';

@Component({
  selector: 'my-characters',
  templateUrl: './characters.component.html',
  styleUrls: [ './characters.component.css' ]
})

export class CharactersComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
