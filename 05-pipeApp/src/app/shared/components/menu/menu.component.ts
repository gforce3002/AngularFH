import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit{
  public menuItems: MenuItem[] | undefined;

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de angular',
        items:[
          {
            label:"Textos y fechas",
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label:"Números",
            icon: 'pi pi-dollar',
            routerLink: 'number'
          },
          {
            label:"No comunes",
            icon: 'pi pi-globe',
            routerLink: 'uncommon'
          },

        ]
      },
      {
        label:"Pipes personalizados",
        items:[
          {
            label:"Otro elemento",
            icon: 'pi pi-globe',
            routerLink: 'custom'
          }
        ]
      }
    ]
  }
}
