import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrls: ['./uncommon-pages.component.css']
})
export class UncommonPagesComponent {
  //i18n select
  public name: string = "Francisco";
  public gender: 'male'|'female' = 'male';



  public invitacionMap= {
    'male':'invitarlo',
    'female': 'invitarla'
  }

  
  changeClient():void
  {
    this.name = "Karol";
    this.gender = 'female';
  }

  //i18n plural
  public client:string[] = ['Alejandra','Adrian','Carlos', 'Lupita', 'Francisco']
  public clientMap: {[k: string]: string}= {
    '=0':'No tenemos clientes',
    '=1':'tenemos # cliente',
    'other':'tenemos # clientes'
  }

  deleteClient():void
  {
    this.client.shift();
  }

  //KeyValue Pipe
  public person = {
    name:'Francisco',
    age: 41,
    address: 'Colima, Mexico'

  }

  //async pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap', value))
  )

  public promiseValue: Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('tenemos data en la promesa.');
      console.log('tenemos data en la promesa.')
    }, 3500);
  })
}

