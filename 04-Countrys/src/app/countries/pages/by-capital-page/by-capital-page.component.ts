import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CountriesService } from '../../services/countries.services';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = []
  public inicialValue: string = '';
  public isLoading: Boolean = false;

  constructor(private countriesService: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries
    this.inicialValue = this.countriesService.cacheStore.byCapital.term
  }

  searchByCapital(term: string ): void
  {
  this.isLoading = true
   this.countriesService.searchCapital(term)
    .subscribe(c => {this.countries = c; this.isLoading = false})
  }
}
