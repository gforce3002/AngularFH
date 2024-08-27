import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, map, delay, tap } from "rxjs";

import { Country } from "../interfaces/Country";
import { CacheStore } from "../interfaces/cache-store.interface";
import { Region } from "../interfaces/region.type";

@Injectable({providedIn: 'root'})
export class CountriesService{
    private apiUrl: string = "https://restcountries.com/v3.1"

    public cacheStore: CacheStore = {
        byCapital: {term:'', countries:[]},
        byCountries: {term:'', countries:[]},
        byRegion: {region:'', countries:[]}
    };

    constructor(private http: HttpClient){this.loadToLocalStorage()}

    private saveToLocalStorage()
    {
        localStorage.setItem('cacheStore',JSON.stringify(this.cacheStore))
    }

    private loadToLocalStorage()
    {
        if(!localStorage.getItem('cacheStore')) return;
        this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
    }

    private getCountriesRequest(url: string): Observable<Country[]>
    {
        
        return this.http.get<Country[]>(url)
        .pipe(
            catchError(error =>{
                return of([]) //-> retorna un array vacio cuando se lanze el catcherror
            }),
            delay(1000)
        );
    }

    searchCapital(term: string): Observable<Country[]>
    {
        const url = `${this.apiUrl}/capital/${term}`
        return this.getCountriesRequest(url)
        .pipe(
            tap(countries => this.cacheStore.byCapital = {term, countries}),
            tap(() => this.saveToLocalStorage())
        );
    }

    searchCountry(term: string): Observable<Country[]>
    {
        const url = `${this.apiUrl}/name/${term}`;
        return this.getCountriesRequest(url)
        .pipe(
            tap(countries => this.cacheStore.byCountries = {term, countries}),
            tap(() => this.saveToLocalStorage())
        );
        
    }

    searchRegion(region: Region): Observable<Country[]>
    {
        const url = `${this.apiUrl}/region/${region}`;
        return this.getCountriesRequest(url)
        .pipe(
            tap(countries => this.cacheStore.byRegion = {region, countries}),
            tap(() => this.saveToLocalStorage())
        );
        
    }

    searchById(Id: string): Observable<Country | null>
    {
        const url = `${this.apiUrl}/alpha/${Id}`;
        return this.http.get<Country[]>(url)
        .pipe(
            map( contries => contries.length > 0 ? contries[0]: null ), 
            catchError(error =>{
                
                return of(null) //-> retorna un array vacio cuando se lanze el catcherror
            })
        ); 
    }

    /*Esta funcion regrese un pais como un array */
    /* searchById(Id: string): Observable<Country[]>
    {
        const url = `${this.apiUrl}/alpha/${Id}`;
        return this.http.get<Country[]>(url)
        .pipe(
            catchError(error =>{
                
                return of([]) //-> retorna un array vacio cuando se lanze el catcherror
            })
        );
    } */
}