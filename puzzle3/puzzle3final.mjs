import { rucksacks } from "./input3.mjs";

const mochilas = rucksacks.trim().split('\n');//Divide el conjunto de mochilas en un array llamado mochilas usando el salto de línea como separador.
let repetidos = [];
for (const mochila of mochilas) { //Recorre cada mochila, divide en dos mitades y busca elementos repetidos entre esas mitades. 
    var mitad = Math.floor(mochila.length / 2);
    var primerCompartimento = mochila.slice(0,mitad);
    var segundoCompartimento = mochila.slice(mitad,mochila.length);

    for (const item of primerCompartimento) {
        if(segundoCompartimento.includes(item)) {
            repetidos.push(item); //Los elementos repetidos se almacenan en el array repetidos.
            break;
        }
    }
}

let sumaPrioridades = 0;
for (const item of repetidos) {
    sumaPrioridades = sumaPrioridades + obtenerPrioridad(item); //Calcula la suma de las prioridades de los elementos repetidos usando la función obtenerPrioridad y muestra el resultado por consola.
}
console.log("La suma de las prioridades repetidas en las mochilas es: " + sumaPrioridades);

//Googlee como mapear una letra a un valor numérico y encontré esta función (La función de obtención de prioridad por letra (obtenerPrioridad) asigna un valor numérico a cada letra del alfabeto, tanto minúsculas como mayúsculas. Este valor numérico se utiliza para calcular la suma de prioridades de ciertos elementos en el conjunto de datos de mochilas.)
function obtenerPrioridad(letra){ //la funcion obtenerPrioridad asigna prioridades numéricas a las letras.
    var prioridades = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
        l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26,
        A:27, B:28, C:29, D:30, E:31, F:32, G:33, H:34, I:35, J:36, K:37,
        L:38, M:39, N:40, O:41, P:42, Q:43, R:44, S:45, T:46,
        U:47, V:48, W:49, X:50, Y:51, Z:52
    }
    return prioridades[letra];
}

// parte2
const mochilas2 = rucksacks.trim().split('\n');
let repetidos2 = [];
for (let i = 0; i < mochilas2.length; i+=3) { //Recorre el conjunto de mochilas en grupos de tres 
    let grupo = mochilas2.slice(i,i+3);
    for (let item of grupo[0]) {
        if(grupo[1].includes(item) && grupo[2].includes(item)) { //busca elementos repetidos en esos grupos. 
            repetidos2.push(item);//Los elementos repetidos se almacenan en el array repetidos2.
            break;
        }
    }
}

let sumaPrioridades2 = 0;
for (const item of repetidos2) {
    sumaPrioridades2 = sumaPrioridades2 + obtenerPrioridad2(item);
}
console.log("La suma de las prioridades de los grupos es: " + sumaPrioridades2);
function obtenerPrioridad2(letra2){
    var prioridades2 = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
        l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26,
        A:27, B:28, C:29, D:30, E:31, F:32, G:33, H:34, I:35, J:36, K:37,
        L:38, M:39, N:40, O:41, P:42, Q:43, R:44, S:45, T:46,
        U:47, V:48, W:49, X:50, Y:51, Z:52
    }
    return prioridades2[letra2];
}