/*
El usuario ingresa su año de nacimiento.
La máquina calcula y muestra su edad aproximada.
*/

let anioDeNacimiento;
let edad;
anioDeNacimiento = parseInt(prompt("¿En que año naciste?"));

// anioDeNacimiento = parseInt(anioDeNacimiento);

edad = 2023 - anioDeNacimiento;

console.log("Tu edad es de " + edad + " ó " + (edad-1) + " años");