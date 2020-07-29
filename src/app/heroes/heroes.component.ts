import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent  implements OnInit {

  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  public heroes = HEROES;
  public selectedHero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  public onSelect(hero:Hero) {
    this.selectedHero = hero;
  }
}
