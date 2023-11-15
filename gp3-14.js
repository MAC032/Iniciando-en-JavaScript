/*
14) Realizá un programa que permita al usuario ingresar personas (para cada una, nombre y edad). La carga termina cuando en el nombre de la persona se ingresa un asterisco ('*'). La computadora debe indicar cómo se llama la persona más joven.
*/

let nombre = prompt("Ingresar nombre (* para terminar)");
let edad = parseInt(prompt(`Ingresar la edad de ${nombre}`));
let edadMasJoven = null;
let nombreMasJoven;

while (nombre !== '*') {
    nombre = prompt("Ingresar nombre (* para terminar)");
    
    if (nombre === '*') {
        break;
    }

    edad = parseInt(prompt(`Ingresar la edad de ${nombre}`));

    // Verifico si es la priemera persona o es más joven que la actual
    if (edadMasJoven === null || edad < edadMasJoven) {
        edadMasJoven = edad;
        nombreMasJoven = nombre;
    }
}

console.log(`${nombreMasJoven} es la persona más joven (${edadMasJoven} años)`);