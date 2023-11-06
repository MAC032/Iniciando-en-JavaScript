/*
8) Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que permita ingresar cant números enteros. La computadora debe mostrar cuál fue el mayor número y en qué posición apareció.
*/

let cant, num, mayor, posicion;

cant = parseInt(prompt("¿Cuántas números vas a ingresar?"));

num = 0;
mayor = 0;

for (let i = 1; i <= cant; i++) {
    num = parseInt(prompt("Ingresa el " + i + "° número"));
    if (num > mayor) {
        mayor = num;
        posicion = i; 
    }
}

console.log(`El número más grande fue el ${mayor}.`);
console.log(`Apareció en la ${posicion}° posición.`);