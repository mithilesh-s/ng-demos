import { Component, OnInit } from '@angular/core';
import { Hero } from '../task2/hero';
import { HeroService } from 'src/services/hero.service';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: [ './dashboard1.component.css' ]
})
export class Dashboard1Component implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}