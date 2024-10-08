import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/components/counter.module';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/components/heroes.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
