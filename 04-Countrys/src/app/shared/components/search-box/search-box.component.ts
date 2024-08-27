import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})

export class SearchBoxComponent implements OnInit, OnDestroy{

  private deboincer: Subject<string> = new Subject<string>();
  private debounceSuscription?: Subscription;

  @Input()
  public placeholder: string = "";

  @Input()
  public inicialValue: string= "";

  @Output()
  public onValue = new EventEmitter<string>();
 
  @Output()
  public onDebounce = new EventEmitter<string>();

  

  ngOnInit(): void {
    this.debounceSuscription = this.deboincer
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      this.onDebounce.emit(value)
    });
  }

  ngOnDestroy(): void {
    this.debounceSuscription?.unsubscribe()
  }

  emitValue(value: string): void
  {
    this.onValue.emit(value)
  }
  
  onKeyPress(searchPress: string )
  {
    this.deboincer.next(searchPress)
  }
}
