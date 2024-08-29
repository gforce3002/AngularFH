import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public sortby: keyof Hero | undefined | '' = '';
  public desc: boolean = false;

  public hero : Hero[] = [
    {
      name: "Superman",
      canFly: true,
      color: Color.blue
      
    },
    {
      name: "Superman",
      canFly: false,
      color: Color.black
    },
    {
      name: "Daredevil",
      canFly: false,
      color: Color.red
    },
    {
      name: "Robin",
      canFly: false,
      color: Color.green
    },
    {
      name: "Linterna Verde",
      canFly: true,
      color: Color.green
    }
  ]

  toggleUpperCase(): void
  {
    this.isUpperCase = !this.isUpperCase;
  }

  changeSort(value: keyof Hero): void
  {
    this.desc = !this.desc
    this.sortby = value;
  }
 

}


