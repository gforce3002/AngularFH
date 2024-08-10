/* Funciones */

function addNumber(a: number, b: number): number
{
    return a+b;
}

const addNumberArroy = (a: number, b: number): string =>{ //-> la funcion retorna un string
    return `${a+b}`; // -> convertimos la suma de dos numeros a un string
}

const multiply = (a: number, b?: number , base: number = 2)=>
{
    return a * base;
}


/* const result = addNumber(2,3);


const result2 = addNumberArroy(5,8)
const resultM = multiply(5,0,55)
console.log({result, result2, resultM}) */

interface Character{
    name: string;
    hp: number;
    showHp: () => void; // => de este forma se declarar una funcion en una interface y puede indicar si retorna un void, string, number o bolean
}

/*especificamos la funcion */

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider = {
    name: 'strider',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`)
    }
}

healCharacter(strider, 10);

strider.showHp();
export {}