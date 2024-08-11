import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman';
  public edad: number = 45;

  get capitalizedName(): string{return 'Hola mundo'.toUpperCase()}

  getHeroDescription(): string{
    return `${this.name} - ${this.edad}` 
  }

  changeHero(name: string):void{
    this.name = name;
  }

  changeEdad(edad: number):void{
    this.edad = edad;
  }
}
