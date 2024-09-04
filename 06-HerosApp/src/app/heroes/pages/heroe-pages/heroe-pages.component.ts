import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/hero.services';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-heroe-pages',
  templateUrl: './heroe-pages.component.html',
  styles: [
  ]
})
export class HeroePagesComponent implements OnInit{
  public heroe?: Hero;
  
  constructor(
    private activedRoute :ActivatedRoute,
    private router: Router,
    private heroService: HeroesService
  ){}
  
  
  ngOnInit(): void {
    this.activedRoute.params
      .pipe(
        switchMap(({id})=> this.heroService.getOneHero(id))
      )
      .subscribe(hero => {
          if(!hero) return this.router.navigateByUrl('');
          console.log(hero);
          return this.heroe = hero;
      })
  }

  goBack():void{
    this.router.navigate(['heroes/list'])
  }
}
