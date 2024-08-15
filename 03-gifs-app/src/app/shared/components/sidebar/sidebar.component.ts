import { Component } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif.service.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public giftLists: string[] = [];

  constructor(private gifsService: GifService){}

  get tags(): string[]{
    return this.gifsService.tagsHistory
  }

  ongetGifts(tag: string):void{
      this.gifsService.searchTag(tag);
  }
}
