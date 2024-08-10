
/*
    ===== Código de TypeScript =====
*/
/* Los genericos <elemnto> */
function queTiposoy<C> (argumento: C){
    return argumento
}

let soyunString = queTiposoy("Hola mundo")
let soyunNumero = queTiposoy(500)

let soyExplicito = queTiposoy<number>(100)