import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interfaces';

@Pipe({
  name: 'SortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy?: keyof Hero | '', desc: boolean = false): Hero[] {
    console.log(desc)
    switch(sortBy){
      case 'name':
          return  desc? heroes.sort((a,b)=>(a.name > b.name)?1 :-1):heroes.sort((a,b)=>(a.name < b.name)? 1 :-1)
      case 'canFly':
          return desc? heroes.sort((a,b)=>(a.canFly > b.canFly)?1 :-1):heroes.sort((a,b)=>(a.canFly < b.canFly)?1 :-1)
      case 'color':
          return desc? heroes.sort((a,b)=>(a.color > b.color)?1 :-1): heroes.sort((a,b)=>(a.color < b.color)?1 :-1)
      default:
          return heroes
    }
  }

}
