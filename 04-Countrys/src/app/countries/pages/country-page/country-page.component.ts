import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.services';
import { Country } from '../../interfaces/Country';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [`img{width:152px}`
  ]
})
export class CountryPageComponent implements OnInit{

  public countrie?: Country; //-> Asi es como se inicializa un objeto especificando que la primera vez en null
  
  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private countriesService  : CountriesService
    ){}

    ngOnInit(): void {
      this.activatedRoute.params
      .pipe(
        switchMap(({id})=> this.countriesService.searchById(id))
      )
      .subscribe(country => {
        if(!country){
            return this.router.navigateByUrl('');
        }
        
        return this.countrie = country;
      })
    }

    /* 
      Esta es la manera tradicional de obtener los datos
      desde el countries.services.ts
    */

  /* ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(({id}) =>{
      this.searchById(id)
    });
  }

  searchById(id: string): void
   {
    this.countriesService.searchById(id)
    .subscribe( e => {
        this.countrie = e
        console.log(this.countrie);
      }
    );
   } */
}
