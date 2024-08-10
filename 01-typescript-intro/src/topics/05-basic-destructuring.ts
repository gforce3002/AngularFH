interface AudioPlayer{
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}


const {song, songDuration, details} = audioPlayer
const {author, year} = details
/* console.log({song, songDuration, author, year}) */

/*para desestructurar un arreglo es hacer lo siguiente */
const [p1, p2, p3] : string[] = ['goku','vegeta','trunks'];

/* 
    otro ejemplo para llegar a la tercera posicion desestructurando el array
    es realizar lo siguiente, anteponiendo comas antes de llegar al que deseamos
    mostrar, ejemplo

    si queremos solamente a truks este es la forma correcta de obtener el valor
    
    const [, , p3] : string[] = ['goku','vegeta','trunks'];

    si queremos a vegeta esta es la forma correcta
    const [, p2] : string[] = ['goku','vegeta','trunks'];
*/

console.log({p1})

export {}