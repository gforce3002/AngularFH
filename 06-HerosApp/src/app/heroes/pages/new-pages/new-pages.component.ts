import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/hero.services';
import { Hero, Publisher } from '../../interfaces/hero.interfaces';
import { delay, filter, switchMap } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogsComponent } from '../../components/confirm-dialogs/confirm-dialogs.component';

@Component({
  selector: 'app-new-pages',
  templateUrl: './new-pages.component.html',
  styles: [
  ]
})
export class NewPagesComponent implements OnInit{
 
  
  public heroForm = new FormGroup(
    {
      id:               new FormControl(''),
      superhero:        new FormControl('',{nonNullable:true}),
      publisher:        new FormControl<Publisher>(Publisher.DCComics),
      alter_ego:        new FormControl(''),
      first_appearance: new FormControl(''),
      characters:       new FormControl(''),
      alter_img:        new FormControl('')
    }
  )

  public publisher=[
    {id: 'DC Comics', description:"DC-Comics"},
    {id: 'Marvel Comics', description:"Marver-Comics"},
  ]

  constructor(
    private herosService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ){}
  
  ngOnInit(): void {
    if(!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(
        switchMap(({id})=> this.herosService.getOneHero(id))
      )
      .subscribe(e => {
        if(!e) return this.router.navigateByUrl('/');

        return this.heroForm.reset(e)
      })
  }

  get currentHero(): Hero
  {
    const hero = this.heroForm.value as Hero;

    return hero
  }

  onSubmit():void
  {
    if(this.heroForm.invalid) return
    
    if(this,this.currentHero.id){
      this.herosService.updateHeroe(this.currentHero)
      .subscribe(hero => {
        this.showSnackbar(`${hero.superhero} update`)
      })
      return;
    }

    this.herosService.addHero(this.currentHero)
      .subscribe( hero =>{
        //TODO mostrar snankbar y navegar a /heroes/edit/hero.id
        this.router.navigate(['/heroes/edit', hero.id])
        this.showSnackbar(`${this.currentHero.superhero} Create`)
      })
    /* this.herosService.updateHeroe(this.heroForm.value) */
  }

  showSnackbar(message: string):void
  {
    this.snackbar.open(message, 'done')
  }

  onDeleteHero():void
  {
    if(!this.currentHero.id) throw Error('Hero id is required');

    const dialogRef = this.dialog.open(ConfirmDialogsComponent, {data: this.heroForm.value})

    /*Refactorizamos cuando se cierre la ventana de dialogo */

    dialogRef.afterClosed()
    .pipe(
        filter((result: boolean)=> result), //-> Aqui especificamos si la ventana del dialogo retorno un true, de lo contrario no avanza con la siguiente instruccion
        switchMap(()=> this.herosService.deleteHeroById(this.currentHero.id) ), //->hacemos que se mande llamar la eliminacion del registro
        filter((wasDeleted)=>wasDeleted), //-> si se borro retornara un true y continuara con la siguiente instrucion, si no no continua
    )
    .subscribe(()=>{
        this.router.navigateByUrl('/');
        this.showSnackbar(`El heroe ha sido eliminado`)
    })


    /* dialogRef.afterClosed().subscribe(result => {
      if(!result) return;

      this.herosService.deleteHeroById(this.currentHero.id)
      .subscribe(hero => {
        if(!hero) throw Error ("Error al eliminar el heroe")
        this.router.navigateByUrl('/');
        this.showSnackbar(`El heroe ha sido eliminado`)
      });

    }) */
  }
}
