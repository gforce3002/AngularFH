import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interfaces';
import { HeroesService } from '../../services/hero.services';

@Component({
  selector: 'app-list-pages',
  templateUrl: './list-pages.component.html',
  styles: [
  ]
})
export class ListPagesComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(private heroesService: HeroesService){}

  ngOnInit(): void {
      this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }
}
