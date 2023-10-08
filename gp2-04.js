/*
4) Realizá un programa que permita al usuario ingresar tres números enteros. La computadora debe indicar cuál de ellos es el mayor.
*/

let num1, num2, num3;

num1 = parseInt(prompt("Ingresá el primer número: "));
num2 = parseInt(prompt("Ingresá el segundo número: "));
num3 = parseInt(prompt("Ingresá el tercer número: "));

if (num1 > num2 && num1 > num3) {
    console.log("El mayor es " + num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("El mayor es " + num2);
} else {
    console.log("El mayor es " + num3);
}