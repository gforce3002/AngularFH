import {Component, EventEmitter, Output} from '@angular/core';
import {Character } from '../Interfaces/character.interface'
import { DbzService } from '../services/dbz.service';

@Component ({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html' 
})

export class MainPaqeComponent {
    //injectamos el servicio DbzService de tipo privado
    constructor(private dbzService: DbzService){}

    get characters(): Character[]{
        return [...this.dbzService.characters]
    }

    DeleteCharacter(uuid: string):void{
        this.dbzService.DeleteCharacter(uuid);
    }

    addCharecter(character: Character):void
    {
        this.dbzService.addCharecter(character);
    }
}