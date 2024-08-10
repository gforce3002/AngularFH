import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  
  @ViewChild ("frmDinamico") frmDinamico!: NgForm
  
  constructor() { }

  ngOnInit(): void {
  }
  
  btnGuardar(){
    console.log("Ejemplo ")
  }

  validarCampo(campo :string){
    return this.frmDinamico?.form.controls[campo]?.invalid &&
             this.frmDinamico?.form.controls[campo]?.touched
  }
}
