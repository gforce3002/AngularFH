export function whatsMyTypes<T>(a: T):T{
    return a
}

const amIString = whatsMyTypes<string>('Hola Mundo');
const amINumber = whatsMyTypes<number>(100);
const amIArray = whatsMyTypes<number[]>([1,2,3,4,5]);


console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));