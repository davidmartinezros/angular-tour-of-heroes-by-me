import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { HeroService } from './hero.service';

RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroesComponent
  }
])

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
    
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // Old version without Promise
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
}
