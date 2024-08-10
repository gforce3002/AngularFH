/*
    ===== Código de TypeScript =====
*/

//Declaramos una variable de tipo arreglo pero indicamos que tipo de datos va aceptar dicho arreglo
let habilidades: (boolean | string | number)[] = ['hola', true, 10]

//indicamos un arreglo que aceptara unicamente valors de tipo string
let dias:string[] = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']

//idnicamos un arrego que aceptara unicamente valores de tipo number
let meses:number[] = [1,2,3,4,5,6,7,8,9,10,11,12]

//indicamos un arreglo que aceptara unicamente valores de tipo boleanos
let banderas:boolean[] = [true, false]


interface Personaje{
    nombre: string
    hp: number
    habilidades: string[]
    puebloNatal?: string  //Esta variable con terminacion ? indica que es una variabla opcional
    //ser llamada o no
}

//Indicamos un objeto
const personaje: Personaje = {
    nombre:"Strider",
    hp:100,
    habilidades:['Bash','counter', 'Healing']
}

personaje.puebloNatal = "Pueblo chocolate"
//NOTA:la forma correcta de definir un objeto es utilizando una interface

console.table(personaje);