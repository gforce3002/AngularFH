import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  
  @ViewChild ("miformulario") miformulario!: NgForm

  constructor() { }

  ngOnInit(): void {
  }
 
  validarProducto(): Boolean{
    
    return this.miformulario?.form.controls['producto']?.invalid &&
             this.miformulario?.form.controls['producto']?.touched 
  }
  
  validarPrecio(): Boolean{
    
    return this.miformulario?.form.controls['Precio']?.touched &&
             this.miformulario?.form.controls['Precio']?.value < 0
             
  }
  Guardar(): void{
     this.miformulario.resetForm({
      Precio:0,
      Existencias:0
     });
  }
}
