import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: []
})
export class CounterComponent{
    public title: string = 'Mi primera app de Angular';
    public counter: number = 10;

    increaseBy(value: number):void{this.counter += value}

    decremensBy(value: number):void {this.counter -= value}

    resetBy(value: number): void{this.counter = value}
}