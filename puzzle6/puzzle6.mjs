import { cadena } from "./input6.mjs";
let respuestaParte1 = () => {
    for(let i = 0; i < cadena.length; i++){
      let miArray = cadena.slice(i, i+4);
      let miSet = new Set(miArray);
      if(miArray.length === miSet.size) {
        return i+4;
      }
    }
    }
    console.log("Respuesta parte 1: " + respuestaParte1());
    let respuestaParte2 = () => {
    for(let i = 0; i < cadena.length; i++){
      let miArray = cadena.slice(i, i+14);
      let miSet = new Set(miArray);
      if(miArray.length === miSet.size) {
        return i+14;
      }
    }
    }
    console.log("Respuesta parte 2: " + respuestaParte2())