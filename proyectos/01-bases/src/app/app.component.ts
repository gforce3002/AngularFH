import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Contador App';
  contador = 0

  btnIncrementar = ()=>{
    this.contador++;
  }

  btnDecrementar = ()=>{
    this.contador--;
  }
}
