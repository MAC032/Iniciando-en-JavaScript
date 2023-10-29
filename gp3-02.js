/*
2) Realizá un programa que permita al usuario ingresar dos números enteros num1 y num2, donde el primero siempre deberá ser menor o igual al segundo. La computadora debe mostrar la secuencia de números existentes entre ambos:
A) Incluyéndolos;
B) Excluyéndolos.
*/

let num1, num2;

num1 = parseInt(prompt("Ingresá el primer número"));
num2 = parseInt(prompt("Ingresá el segundo número"));

console.log("Primer ciclo (inclusivo)");
for (let index = num1; index <= num2; index++) {
    console.log(index);   
}

console.log("Segundo ciclo (exclusivo)");
for (let index = num1 + 1; index < num2; index++) {
    console.log(index);   
}