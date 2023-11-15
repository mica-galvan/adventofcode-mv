import { rucksacks } from "./input3.mjs";

const mochilas = rucksacks.trim().split('\n');
let repetidos = [];

for (let i = 0; i < mochilas.length; i+=3) {
    let grupo = mochilas.slice(i,i+3);
    //console.log("Grupo " + i + " a grupo " + (i+3))
    //console.log(grupo)
    for (let item of grupo[0]) {
        if(grupo[1].includes(item) && grupo[2].includes(item)) {
            repetidos.push(item);
            break;
        }
    }
}

let sumaPrioridades = 0;
for (const item of repetidos) {
    //console.log(repetido + " - " + obtenerPrioridad(repetido));
    sumaPrioridades = sumaPrioridades + obtenerPrioridad(item);
}
console.log("La suma de las prioridades de los grupos es: " + sumaPrioridades);
////console.log("La suma de las prioridades repetidas en las mochilas es: " + repetidos.reduce((accumulator, currentValue) => accumulator + obtenerPrioridad(currentValue), 0, ));

//Googlee como mapear una letra a un valor numérico y encontré esta función
function obtenerPrioridad(letra){
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