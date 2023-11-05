/*
5) Realizá un programa que permita al usuario ingresar 5 edades. La computadora debe indicar cuántas edades fueron valores impares mayores que 18.
*/

// Declaro una variable para contar las edades impares mayores a 18.
let contador = 0;

let edad;

// Utilizo un ciclo for para pedir al usuario que ingrese 5 edades.

for (let i = 1; i <= 5; i++) {
    let edad = parseInt(prompt("Ingrese la edad #" + i + ":"));
    
    // Compruebo si la edad es un número impar mayor a 18.
    if (edad % 2 !== 0 && edad > 18) {
        contador++;
    }
}

// Muestro la cantidad de edades impares mayores a 18.
console.log(`La cantidad de edades impares mayores a 18 son: ${contador}`);