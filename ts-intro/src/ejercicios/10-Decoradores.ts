
/*
    ===== Código de TypeScript =====
*/
function classDecorator<T extends { new (...arg: any[]) : {} }>(
    constructor: T
){
    return class extends constructor{
        newProperty = "new property";
        hello: "override"
    };
}


@classDecorator
class MiSuperClase{
    public miPropiedad: string = "ABC123";
    imprimir(){
        console.log('hola mundo')
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase()

/* para que no marque el error de los decoradores ir al archivo tsconfig y 
descomentar la linea "experimentalDecorators": true,  */