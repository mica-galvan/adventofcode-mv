import { secciones } from "./input4.mjs";

const misSecciones = secciones.trim().split("\n");
let seccionesIntersectadas = 0;

for (let par of misSecciones) {
    let par1 = par.trim().split(",")[0];
    let par2 = par.trim().split(",")[1];

    let minPar1 = parseInt(par1.trim().split("-")[0]);
    let maxPar1 = parseInt(par1.trim().split("-")[1]);
    let minPar2 = parseInt(par2.trim().split("-")[0]);
    let maxPar2 = parseInt(par2.trim().split("-")[1]);

    if (minPar1 <= minPar2 && maxPar1 >= maxPar2) {
        // console.log("Par 1 contiene a Par 2.")
        // console.log("Par 1 " + par1)
        // console.log("Par 2 " + par2)
        seccionesIntersectadas += 1;
    } else if (minPar2 <= minPar1 && maxPar2 >= maxPar1) {
        // console.log("Par 2 contiene a Par 1.")
        // console.log("Par 1 " + par1)
        // console.log("Par 2 " + par2)
        seccionesIntersectadas += 1;
    }
}

console.log("Se pisan completamente " + seccionesIntersectadas + " secciones.");