/*
El usuario ingresa su año de nacimiento.
La máquina calcula y muestra su edad aproximada.
*/
// Entrada --> Proceso --> Salida

let anioDeNacimiento;
let edad;

// Entrada
anioDeNacimiento = parseInt(prompt("¿En que año naciste?"));

// anioDeNacimiento = parseInt(anioDeNacimiento);

// Proceso
edad = 2023 - anioDeNacimiento;

// Salida
// Concatenar con +
console.log("Tu edad es de " + edad + " ó " + (edad-1) + " años");
// Concatenar con Template String (con backstick)
console.log(`Tu edad es de ${edad} ó ${edad-1} años`);