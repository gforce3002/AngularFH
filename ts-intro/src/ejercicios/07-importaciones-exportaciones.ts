import { Producto, calculaISV } from './06-Desestructuracion-argumentos';
/*
    ===== Código de TypeScript =====
*/


const carritoCompras: Producto[] = [
    {desc:'Chetos madriados', precio: 13},
    {desc:'huevo mediano', precio: 38},
    {desc:'azucar', precio: 19},

]

const [total, iva] = calculaISV(carritoCompras)

console.log("El total es: ", total)
console.log("El iva es:", iva)
