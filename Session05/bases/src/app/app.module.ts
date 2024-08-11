import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importamos los modulos
import {DbzModule} from './modulos/dbz/dbz.module'

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
