import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Character} from '../../Interfaces/character.interface'

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
    public index: EventEmitter<string> = new EventEmitter();


  @Input() 
  public characterList : Character[] = [];

  onDeleteCharacter(index: string):void{
    this.index.emit(index);
  }
}
