/*
    ===== Código de TypeScript =====
*/

//Declaracion de funciones, agregando ahora el tipado de tipo number y retornando un number
function sumar(a: number,b: number): number{
    return a+b
}

const resultado = sumar(10,10)
console.log(resultado);

//Funciones flecha
const sumarflecha = (a:number,b:number):number => {return a+b}

//funciones con argumentos opcionales 

function multiplicar (numero : number, otronumero? : number, base : number =2): number{
    return numero * base;
}

console.log(multiplicar(5,0,5))

//funciones con objetos com argumentos
interface personajeLOR{
    nombre: string
    pv: number
    mostrarHp: () => void
}

function curar(personaje: personajeLOR, curarX: number){
    personaje.pv += curarX;
    console.log(personaje)
}

const nuevoPersonaje : personajeLOR = {
    nombre:'Strider',
    pv: 50,
    mostrarHp(){
        console.log("Puntos de vida", this.pv)
    }
}

curar(nuevoPersonaje,20)
nuevoPersonaje.mostrarHp();