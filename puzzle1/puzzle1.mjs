import { listaDeCaloriasPorElfo } from "./input1.mjs";
//console.log(listaDeCaloriasPorElfo);
//ejecutar consola vsc: node archivo.js

const elfos = listaDeCaloriasPorElfo.trim().split('\n\n'); //trim saca espacios delante y detras de cada linea y split divide cuando detecta salto de linea (doble). Divide por bloque??
//console.log(typeof(elfos[0])) //array porque tiene posiciones

let maxCalorias = 0;
let elfoMaxCalorias = '';

for (const elfo of elfos) {
    const calorias = elfo.trim().split('\n'); //split devuelve array
    let sumaCalorias = 0;
  
    for (const caloria of calorias) {
      sumaCalorias += parseInt(caloria);
    }
  
    if (sumaCalorias > maxCalorias) {
      maxCalorias = sumaCalorias;
      elfoMaxCalorias = elfo;
    }
  }
  
  console.log(`El elfo que lleva la suma más alta de calorías tiene las siguientes cantidades: ${elfoMaxCalorias}`);
  console.log(`El total de calorías llevadas por ese elfo es: ${maxCalorias}`);

  //parte 2
  