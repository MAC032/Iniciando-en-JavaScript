/*
El usuario ingresa su año de nacimiento.
La máquina calcula y muestra su edad aproximada.
*/

const EDAD_LEGAL = 18;
let anioDeNacimiento;
let edad;
anioDeNacimiento = parseInt(prompt("¿En que año naciste?"));

// anioDeNacimiento = parseInt(anioDeNacimiento);

edad = 2023 - anioDeNacimiento;

console.log("Tu edad es de " + edad + " ó " + (edad-1) + " años");

// Informar si puedo o no pasar al casino

if (edad >= EDAD_LEGAL) {
    console.log("Pasa");
} else {
    console.log("NO Pasa");
}