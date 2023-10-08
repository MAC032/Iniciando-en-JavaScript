/*
7) Realizá un programa que permita al usuario ingresar el ancho y el largo de un terreno en metros y el valor del metro cuadrado de tierra. La computadora debe mostrar el valor total del terreno y la cantidad de metros de alambre que serían necesarios para cercarlo completamente en tres pasadas.
*/

let ancho, largo, valorM2, valorTotal, metrosAlambre;

ancho = parseFloat(prompt("Ingresá el ancho del terreno: "));
largo = parseFloat(prompt("Ingresá el largo del terreno: "));
valorM2 = parseInt(prompt("Ingresá el valor en m2: "));

valorTotal = ancho * largo * valorM2;
metrosAlambre = ((ancho * 2) + (largo * 2)) * 3;

console.log("El terreno vale $ " + valorTotal);
console.log("Para cerrarlo en 3 pasadas, se necesitan " + metrosAlambre + " metros de alambre");