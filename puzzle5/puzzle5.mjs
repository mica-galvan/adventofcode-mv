import { movimientos } from "./input5.mjs";

let pila1 = ["D", "L", "J", "R", "V", "G", "F"];
let pila2 = ["T", "P", "M", "B", "V", "H", "J", "S"];
let pila3 = ["V", "H", "M", "F", "D", "G", "P", "C"];
let pila4 = ["M", "D", "P", "N", "G", "Q"];
let pila5 = ["J", "L", "H", "N", "F"];
let pila6 = ["N", "F", "V", "Q", "D", "G", "T", "Z"];
let pila7 = ["F", "D", "B", "L"];
let pila8 = ["M", "J", "B", "S", "V", "D", "N"];
let pila9 = ["G", "L", "D"];

let pilas = [pila1, pila2, pila3, pila4, pila5, pila6, pila7, pila8, pila9];

let instrucciones = movimientos.trim().split("\n");

for(let instruccion of instrucciones){
  let cantidades=instruccion.match(/\d+/g); //regular expression para obtener los numeros de una cadena de texto.  Contendrá un array con las coincidencias encontradas en la cadena. Cada elemento del array es una secuencia de uno o más dígitos.
  for(let i=1;i<=parseInt(cantidades[0]);i++){ //cantidad de cajas que va a mover
    //eval("pila"+cantidades[2]+".push(pila"+cantidades[1]+".pop())")//eval=eje
    //let pilaDesde = pilas[parseInt(cantidades[1])-1].pop();
    //let pilaHasta = 
    pilas[parseInt(cantidades[2])-1].push(pilas[parseInt(cantidades[1])-1].pop());
  }
}

// let resultado = "";
// for ( let i=1; i<=9; i++) {
//     resultado=resultado+ eval("pila" + i + ".pop()");
// }
// console.log(resultado)
for (let pila of pilas){
    console.log(pila.pop())
}
