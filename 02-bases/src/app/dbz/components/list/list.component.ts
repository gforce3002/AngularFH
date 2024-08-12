import { Component, Input } from '@angular/core';
import {Character} from '../../Interfaces/character.interface'

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() 
  public characterList : Character[] = [
    {name: 'trunks', power: 8000}
  ];
}
