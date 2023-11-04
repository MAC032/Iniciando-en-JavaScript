/*
4) Realiza un programa que permita al usuario ingresar un número natural n. La computadora debe mostrar los primeros n múltiplos de 3 excepto aquellos que sean a la vez múltiplos de 5.
*/

let n;
let encontrados = 0;

n = parseInt(prompt("Ingrese cuántos múltiplos de 3 pero no de 5 quiere mostrar"));

for (let i = 1; encontrados < n; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i);
        encontrados++;
    }   
}