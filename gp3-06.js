/*
6) Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que permita ingresar cant números reales, correspondientes a las ventas realizadas por cierto vendedor. La computadora debe mostrar el total de las ventas.
*/

let cant, ventas, total;

cant = parseInt(prompt("¿Cuántas ventas vas a ingresar?"));

total = 0;

for (let i = 1; i <= cant; i++) {
    ventas = parseFloat(prompt("Ingresar el importe de la venta " + i));
    total = total + ventas;
}

console.log(`El importe total de ventas es $ ${total}`);