/*
5) Realizá un programa que permita al usuario ingresar su edad (entre 1 y 120 años) y su género ('F' para mujeres, 'M' para hombres). La computadora debe indicar si la persona está en edad de jubilarse1. En caso de haber ingresado valores erróneos (edad fuera de rango o género inválido), informar tal situación.
*/

const EDAD_JUB_MUJER = 60;
const EDAD_JUB_HOMBRE = 65;
let edad;
let genero;

edad = parseInt(prompt("Ingresá tu edad [1, 120]"));
genero = prompt("Ingresá tu género [F, M]");

if (edad > 0 && edad < 121 && genero === "F" || edad > 0 && edad < 121 && genero === "M") {
    if (edad >= EDAD_JUB_MUJER && genero === "F" || edad >= EDAD_JUB_HOMBRE && genero === "M") {
        console.log("Estás en edad de jubilarte");
    } else {
        console.log("NO estás en edad de jubilarte");
    }  
} else {
    if (edad < 0 || edad > 121 || genero !== "F" || genero !== "M") {
        if (edad < 0 || edad > 121) {
            console.log("Edad fuera de rango");
        } else {
            console.log("Género inválido");
        }   
    }
}