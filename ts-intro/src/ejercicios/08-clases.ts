
/*
    ===== Código de TypeScript =====
*/
class Personanormal {
   constructor(
    public nombre: string,
    public direccion: string
   ){}

}

class Heroe extends Personanormal{

    constructor (
        public alterego: string,
        public edad?: number,
        public nombreReal?:string
    ){
        super(nombreReal, "Ciudad central");
    }
}

const ironman  = new Heroe('Superman');

console.log(ironman)