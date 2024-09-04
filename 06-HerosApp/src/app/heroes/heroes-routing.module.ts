import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPagesComponent } from './layout/layout-pages/layout-pages.component';
import { NewPagesComponent } from './pages/new-pages/new-pages.component';
import { ListPagesComponent } from './pages/list-pages/list-pages.component';
import { SearchPagesComponent } from './pages/search-pages/search-pages.component';
import { HeroePagesComponent } from './pages/heroe-pages/heroe-pages.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutPagesComponent,
    children:[
      { path:'new-hero', component: NewPagesComponent },
      { path:'list', component: ListPagesComponent },
      { path:'edit/:id', component: NewPagesComponent },
      { path:'search', component: SearchPagesComponent },
      /* esta ruta se debe de porner simpre al final por 
        que este comodin si se pone al princio se tomaria como 
        las otras y nunca entraria
      */
      { path:':id', component: HeroePagesComponent} ,
      { path: '**', redirectTo: 'list'}

    ]
},

{
    path: '**',
    redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
