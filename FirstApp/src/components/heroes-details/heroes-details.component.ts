import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/services/hero.service';
import { Hero } from '../task2/hero';
import { Location } from '@angular/common';


@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.css']
})
export class HeroesDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private heroService:HeroService,private location:Location) { }

  ngOnInit(): void {
    this.getHero()
  }

  @Input() hero?: Hero;

  getHero():void{
    const id=Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHeroes1(id).subscribe(hero=>this.hero=hero)
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

}
