export class Person
{
    /* public name: string;
    private addres: string; */

    /* constructor(name: string, address: string){
        this.name = name;
        this.addres = address
    } */

    //esta es otra forma de declarar las asignaciones
    constructor( public name: string, private address: string = 'No Address'){}

}
/* export class Hero extends Person{
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ){
        super(realName, 'Coquimatlan');
    }
} */

export class Hero {
    //public person: Person;



    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public pérson: Person
    ){
        //this.person = new Person(realName);    
    }
}

const person = new Person('tony start', 'new york');
const ironman = new Hero('Francisco', 45, 'Tony', person);

console.log(ironman)

