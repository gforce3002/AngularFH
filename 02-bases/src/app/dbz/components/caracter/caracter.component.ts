import { Component } from '@angular/core';
import { Character } from '../../Interfaces/character.interface'

@Component({
  selector: 'dbz-add-caracter',
  templateUrl: './caracter.component.html',
  styleUrls: ['./caracter.component.css']
})
export class CaracterComponent {
  public character : Character = {
    name:'',
    power: 0
  };
}
