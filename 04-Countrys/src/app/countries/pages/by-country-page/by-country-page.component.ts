import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.services';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = []
  public isLoading: Boolean = false
  public inicialValue: string = "";

  constructor(private countriesService  : CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.inicialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry(term: string): void
   {
    this.isLoading = true;
    this.countriesService.searchCountry(term)
    .subscribe( e => {
        this.countries = e;
        this.isLoading = false;
      }
    );
   }
}
