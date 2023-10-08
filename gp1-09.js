/*
9) Realizá un programa que permita al usuario ingresar dos números enteros, que representan las
medidas en grados de dos ángulos interiores de cierto triángulo. La computadora debe mostrar el
valor en grados del ángulo restante.
*/

let n1, n2, g;

n1 = parseInt(prompt("Ingresá el valor del primer ángulo: "));
n2 = parseInt(prompt("Ingresá el valor del segundo ángulo: "));

g = 180 - (n1 + n2);

console.log("El ángulo restante mide " + g + "°");
