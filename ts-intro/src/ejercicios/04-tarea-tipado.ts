/*
    ===== Código de TypeScript =====
*/

interface DomicilioSuperheroe{
    calle: string
    pais: string
    ciudad: string
}

interface Superheroe{
    nombre: string
    edad: number
    direccion: DomicilioSuperheroe,
    mostrarDireccion: () => string 
}

const superheroe: Superheroe = {
    nombre: "Spider Man",
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: "USA",
        ciudad:"New York"
    },
    mostrarDireccion(){
        const pantalla = `${this.nombre}, ${this.direccion.ciudad}, ${this.direccion.pais} `
        return pantalla
    }
}

console.log(superheroe.mostrarDireccion());