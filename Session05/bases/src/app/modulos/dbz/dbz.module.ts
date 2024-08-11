import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Creacion de los componentes
 */
import { MainPageComponent } from '../../Componentes/main-page/main-page.component';
import { HeroeComponent } from '../../Componentes/Heroe/heroe.component'

@NgModule({
  declarations: [
    MainPageComponent,
    HeroeComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeroeComponent,
  ]
})
export class DbzModule { }
