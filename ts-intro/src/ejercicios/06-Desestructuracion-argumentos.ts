/*
    ===== Código de TypeScript =====
*/
export interface Producto{
    desc: string,
    precio: number
}

const precio1: Producto = {
    desc: "Huevo mediano",
    precio: 38
}

const precio2: Producto = {
    desc: "Chetos madriados",
    precio: 13
}

export function calculaISV(Productos: Producto[]):[number, number]{
    let total = 0
    Productos.forEach(({precio}) =>{
        total += precio
    })
    return [total, total * 0.15]
}

const [total, iva] = calculaISV([precio1, precio2])

console.log("El total es: ", total)
console.log("El iva es:", iva)
