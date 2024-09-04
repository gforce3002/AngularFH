import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interfaces';

@Pipe({
  name: 'heroeImage'
})
export class HeroeImagePipe implements PipeTransform {

  transform(heroe: Hero): string {
    
    if(!heroe.id && !heroe.alter_img) return 'assets/no-image.png'
    
    if(heroe.alter_img) return heroe.alter_img;

    return `assets/heroes/${heroe.id}.jpg`;
  }
  
}
