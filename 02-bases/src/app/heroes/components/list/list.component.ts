import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroList : string[] = ["SpiderMan","Capitan America","BlackWidow","Wonderwoman","Batman"];
  public LastHero?: string = "";

  deleteLastHeroList(){
    //this.LastHero = this.heroList[this.heroList.length-1];
    this.LastHero = this.heroList.pop();
  }
}
