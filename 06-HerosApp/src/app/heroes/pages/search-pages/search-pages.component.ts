import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HeroesService } from '../../services/hero.services';
import { Hero } from '../../interfaces/hero.interfaces';
import { MatAutocompleteActivatedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-pages',
  templateUrl: './search-pages.component.html',
  styles: [
  ]
})
export class SearchPagesComponent {
  public searchInput = new FormControl();
  public filteredOptions?: Observable<string[]>
  public heroes: Hero[] = [];

  public selectedHero?: Hero;

  constructor(
    private heroesService: HeroesService
  ){}

  searchHero(){
    const value: string = this.searchInput.value || '';
    this.heroesService.autocomplete(value)
      .subscribe(heroes => this.heroes = heroes)

  }

  onSelectedOption(event: MatAutocompleteActivatedEvent): void
  {
    
    if(!event.option?.value){
      this.selectedHero = undefined;
      return
    } 
    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero)
    
    this.selectedHero = hero;
  }
}
