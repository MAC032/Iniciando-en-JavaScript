/*
8) Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe indicar si el mayor es divisible3 por el menor.
*/

let n1, n2, ordenando;

n1 = parseInt(prompt("Ingresá el primer número entero:"));
n2 = parseInt(prompt("Ingresá el segundo número entero:"));

if (n1 < n2) {
    console.log("El primer número es menor que el segundo.");
    ordenando = n1;
    n1 = n2;
    n2 = ordenando;
    console.log("Números intercambiados.");
}

if (n1 % n2 === 0) {
    console.log(n1 + " es divisible por " + n2);
} else {
    console.log(n1 + " No es divisible por " + n2);
}