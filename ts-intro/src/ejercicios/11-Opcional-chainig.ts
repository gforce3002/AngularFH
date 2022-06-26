
/*
    ===== Código de TypeScript =====
*/
interface Pasajero{
    nombre: string
    hijos?: string[]
}

const pasajero1 : Pasajero = {
    nombre: "Francisco"
}

const pasajero2 : Pasajero = {
    nombre: "Lupi",
    hijos: ["karol","Ivanna"]
}

function imprimeHijos (pasajero: Pasajero): void{
    const cuantoshijos = pasajero.hijos?.length || 0
    console.log(cuantoshijos)
}

imprimeHijos(pasajero2);