import { Injectable } from '@angular/core';
import { Character } from '../Interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() { }
    
    public characters: Character[] = [
        {uuid: uuid(), name: "Krilin", power: 5000},
        {uuid: uuid(), name: "Goku", power: 1000},
        {uuid: uuid(), name: "Vegeta", power: 8000},
    ];

    addCharecter(chatacter: Character):void{
        console.log(chatacter);
        this.characters.push(chatacter);
    }

    /*
        buscamos y eliminamos el objeto de acuerdo al index
        con la funcion splice 
    */
    /* DeleteCharacter(index: number){
        
        this.characters.splice(index,1);
    } */

        DeleteCharacter(uuid: string)
        {
            this.characters = this.characters.filter(e=> e.uuid !== uuid);
        }
}