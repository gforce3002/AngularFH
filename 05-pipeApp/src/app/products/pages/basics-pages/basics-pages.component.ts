import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrls: ['./basics-pages.component.css']
})

export class BasicsPagesComponent {
  public nameLower: string = "francisco";
  public nameUpper: string = "FRANCISCO";
  public fullName: string = "FraNCisCo RaMirEZ";

  public customDate: Date = new Date();
}
