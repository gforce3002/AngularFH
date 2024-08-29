import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:"canflay"
})

export class CanFlyPipe implements PipeTransform{
    transform(value:boolean): string{
        return value? "Vuela":"No vuela"
    }
}