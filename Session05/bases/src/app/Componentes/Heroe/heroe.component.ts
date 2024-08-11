import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
  
})
export class HeroeComponent implements OnInit {

    nombre: string = 'Ironman';
    edad: number = 45;

  constructor() { }

  ngOnInit(): void {
  }

  get nombreCapitalizado(){
    return this.nombre.toUpperCase()
  }
  //metodo o funcion
  obtenerNombre(): string{
    return `${this.nombre} - ${this.edad}`;
  }

  
}
