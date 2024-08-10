let skills: string[] = ['bash']

/*esta es la forma correcta de declarar un objeto que instancie
los tipos de variables que tendra el objeto */
interface Character
{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string | undefined; // cuando se pone el signo ? indica que es opcional el argumento de la interface
}

// Declaramos una variable de tipo conts como objeto de la interface
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}
strider.hometown = "Rivendell";
console.table(strider)
export {};