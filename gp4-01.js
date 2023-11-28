// Definición de funciones

// Leer un número entero
function numEntero(mensaje) {
    return parseInt(prompt(mensaje));
}

// 1) esPar, que devuelva si un número entero dado como parámetro es par o no.
function esPar(n) {
    return n % 2 === 0;
}

// Programa principal
let num = numEntero("Ingrese un número entero");

if (esPar(num)) {
    console.log(`El número ${num} es un número par`);
} else {
    console.log(`El número ${num} es un número impar`);
}