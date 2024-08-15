import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../Interfaces/character.interface'
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-caracter',
  templateUrl: './caracter.component.html',
  styleUrls: ['./caracter.component.css']
})
export class CaracterComponent {

  @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character : Character = {
    uuid: '',
    name:'',
    power: 0
  };

  emitCharacter()
  {
    this.character.uuid = uuid();
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit({...this.character});
    
    this.character = {uuid: '', name : '', power: 0}
  }
}
