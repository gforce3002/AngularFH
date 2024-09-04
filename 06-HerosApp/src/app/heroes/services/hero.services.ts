import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { enviroments } from 'src/enviroments/enviroments';
import { Hero } from '../interfaces/hero.interfaces';

@Injectable({providedIn: 'root'})
export class HeroesService {
    public baseUrl: string = enviroments.baseUrl;

    constructor(private httpClient: HttpClient) { }
    
    getHeroes(): Observable<Hero[]>
    {
        return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`)
    }

    getOneHero(id:string):  Observable<Hero|undefined>
    {
        return this.httpClient.get<Hero>(`${this.baseUrl}/heroes/${id}`)
        /*para cachar el error cuando el id no exista */
        .pipe(
            //-> regresamos un observable indefinido con la instruccion of
            //-> y el catchError
            catchError(e=>of(undefined)) 
        )
    }

    autocomplete(query: string):Observable<Hero[]>
    {
        
        return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`)
    }

    addHero(hero: Hero): Observable<Hero>
    {
        return this.httpClient.post<Hero>(`${this.baseUrl}/heroes`, hero)
    }

    updateHeroe(hero: Hero): Observable<Hero>
    {
        if(!hero.id) throw Error('Hero id is required');
        return this.httpClient.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero)
    }

    deleteHeroById(id: string): Observable<boolean>
    {
        if(!id) throw Error('Hero id is required')
        return this.httpClient.delete(`${this.baseUrl}/heroes/${id}`)
        .pipe(
            catchError(err=>of(false)),
            map(resp => true)
        )
    }
}