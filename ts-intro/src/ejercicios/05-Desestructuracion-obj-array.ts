/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string
    anio:number
}

const reproducir : Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "the darness",
    detalles:{
        autor:"Lacrimosa",
        anio:1991
    }
}

//const {volumen, segundo, cancion, detalles:{autor}} = reproducir
const {volumen, segundo, cancion, detalles} = reproducir
const {autor, anio} = detalles

/* console.log("El volumen actual es: ", volumen)
console.log("El segundo actual es: ", segundo)
console.log("la cancion actual es: ", cancion)
console.log("El autor actual es: ", autor ) */

const dbz:string[] = ['goku',"Vegeta",'gohan']

const [,,p3] = dbz

console.log(p3)