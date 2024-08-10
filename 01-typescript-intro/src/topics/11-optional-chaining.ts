export interface Passenger
{
    name:string;
    children?: string[]

}

const passenger1: Passenger = {
    name: "Francisco"
}

const passenger2:Passenger = {
    name: "Melissa",
    children: ['Natalia','Elizabeth']
}

const returnChildrenNumber = (passenger: Passenger): number =>
{
    const howMenyChildren = passenger.children?.length || 0; //Esto es el optional Chaning "?" si existe retorna el length o de lo contrario si no existe retorna 0
    
    return howMenyChildren;
}

const result  = returnChildrenNumber(passenger2)

console.log(result)