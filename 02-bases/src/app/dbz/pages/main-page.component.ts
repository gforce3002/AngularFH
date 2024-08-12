import {Component} from '@angular/core';
import {Character } from '../Interfaces/character.interface'

@Component ({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html' 
})

export class MainPaqeComponent {
    public characters: Character[] = [
        {name: "Krilin", power: 5000},
        {name: "Goku", power: 1000},
        {name: "Vegeta", power: 8000},
    ];
}