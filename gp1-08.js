/*
8) Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe
mostrar los resultados de las 4 operaciones matemáticas básicas con tales números.
*/

let n1, n2, s, r, m, d;

n1 = parseInt(prompt("Ingresá el primer número: "));
n2 = parseInt(prompt("Ingresá el segundo número: "));

s = n1 + n2;
r = n1 - n2;
m = n1 * n2;
d = n1 / n2;

console.log(n1 + " + " + n2 + " = " + s);
console.log(n1 + " - " + n2 + " = " + r);
console.log(n1 + " * " + n2 + " = " + m);
console.log(n1 + " / " + n2 + " = " + d);