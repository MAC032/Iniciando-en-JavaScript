/*
3) Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe indicar cuál de ellos es el mayor.
*/

let num1, num2;

num1 = parseInt(prompt("Ingresá el primer número: "));
num2 = parseInt(prompt("Ingresá el segundo número: "));

if (num1 > num2) {
    console.log("El mayor es " + num1);
} else {
    console.log("El mayor es " + num2);
}