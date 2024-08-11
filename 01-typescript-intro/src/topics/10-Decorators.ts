function classDecorator<T extends{new(...args:any[]): {} }>(constructor: T)
{
    return class extends constructor{
        newProperty = "New property";
        hello = 'override';
    }
}

@classDecorator
export class SuperClass{
    public myProperty: string = 'Abc1234';

    print(){
        console.log('Hola Mundo');
    }
}

console.log(SuperClass)

const myclass = new SuperClass();
console.log(myclass)