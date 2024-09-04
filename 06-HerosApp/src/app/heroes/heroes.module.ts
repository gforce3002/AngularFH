import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroePagesComponent } from './pages/heroe-pages/heroe-pages.component';
import { LayoutPagesComponent } from './layout/layout-pages/layout-pages.component';
import { ListPagesComponent } from './pages/list-pages/list-pages.component';
import { NewPagesComponent } from './pages/new-pages/new-pages.component';
import { SearchPagesComponent } from './pages/search-pages/search-pages.component';

import { CardComponent } from './components/heroes-hero-card/card.component';
import { HeroeImagePipe } from './pipes/heroe-image.pipe';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogsComponent } from './components/confirm-dialogs/confirm-dialogs.component';



@NgModule({
  declarations: [
    HeroePagesComponent,
    LayoutPagesComponent,
    ListPagesComponent,
    NewPagesComponent,
    SearchPagesComponent,
    CardComponent,
    HeroeImagePipe,
    ConfirmDialogsComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
