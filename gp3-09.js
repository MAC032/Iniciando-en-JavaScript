/*
9) Realizá un programa que permita al usuario ingresar un número natural. La computadora debe mostrar el factorial1 del número.
*/
/*
1 El factorial de un entero positivo n se define como el producto de todos los números enteros positivos desde 1 hasta n. Por ejemplo, el factorial de 5 se calcula como: 5! = 1x2x3x4x5 = 120. Tené en cuenta que no se puede calcular el factorial de un número negativo.
*/

let num;

num = parseInt(prompt("Ingresá el número para calcular el factorial"));
factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
}

console.log(`${num}! = ${factorial}`);
