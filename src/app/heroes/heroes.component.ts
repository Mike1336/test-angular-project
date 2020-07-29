import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent  implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessagesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  public heroes: Hero[];
  public selectedHero: Hero;


  public onSelect(hero:Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  public getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
