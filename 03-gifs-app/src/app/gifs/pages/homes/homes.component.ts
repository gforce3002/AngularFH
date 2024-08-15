import { Component } from '@angular/core';
import { GifService } from '../../services/gif.service.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home',
  templateUrl: './home-pages.component.html',
  
})
export class HomePagesComponent {
  public gifsList: Gif[]= [];

  constructor(private gifsService: GifService){}

  get Gifs(): Gif[]{
    return this.gifsService.gifsList
  }

}
