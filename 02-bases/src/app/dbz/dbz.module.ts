import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MainPaqeComponent} from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CaracterComponent } from './components/caracter/caracter.component';



@NgModule({
  declarations:[
    MainPaqeComponent,
    ListComponent,
    CaracterComponent
],
exports:[
  MainPaqeComponent,
],
imports:[
    CommonModule,
    FormsModule
]
})
export class DbzModule { 

  
}