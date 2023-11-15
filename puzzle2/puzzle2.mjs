import { guiaJuego } from "./input2.mjs";

const partida = guiaJuego.trim().split('\n');
//let resultadPorPartida = 0;
// let contador = 0;
let totalParte1 = 0;
let totalParte2 = 0;

// console.log(partida)
for (const mano of partida) {
    // contador +=1;
    // console.log(contador + " jugada " + mano.toString())
    if (mano === 'A X') {
        totalParte1 = totalParte1 + 4;
        totalParte2 = totalParte2 + 3;
        // totalParte1 += 4;
    }
    else if (mano === 'A Y') {
        totalParte1 = totalParte1 + 8;
        totalParte2 = totalParte2 + 4;
    }
    else if (mano === 'A Z') {
        totalParte1 = totalParte1 + 3;
        totalParte2 = totalParte2 + 8;
    }
    else if (mano === 'B X') {
        totalParte1 = totalParte1 + 1;
        totalParte2 = totalParte2 + 1;
    }
    else if (mano === 'B Y') {
        totalParte1 = totalParte1 + 5;
        totalParte2 = totalParte2 + 5;
    }
    else if (mano === 'B Z') {
        totalParte1 = totalParte1 + 9;
        totalParte2 = totalParte2 + 9;
    }
    else if (mano === 'C X') {
        totalParte1 = totalParte1 + 7;
        totalParte2 = totalParte2 + 2;
    }
    else if (mano === 'C Y') {
        totalParte1 = totalParte1 + 2;
        totalParte2 = totalParte2 + 6;
    }
    else if (mano === 'C Z') {
        totalParte1 = totalParte1 + 6;
        totalParte2 = totalParte2 + 7;
    }
}
console.log("PARTE 1");
console.log("El total de puntos de todas las manos es: " + totalParte1);
console.log("---------");
console.log("PARTE 2");
console.log("El total de puntos de todas las manos es: " + totalParte2);