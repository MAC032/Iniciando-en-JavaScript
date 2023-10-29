/*
3) Realizá un programa que permita al usuario ingresar un número entero n entre 1 y 10. La computadora debe mostrar la tabla de multiplicar de n.
*/

let n;

n = parseInt(prompt("Ingresá un número entero (entre 1 y 10)"));

console.log("Tabla del " + n);

for (let index = 1; index <= 10; index++) {
    console.log(`${n} x ${index} = ${n * index}`);
}

// Concatenar con +
// console.log(n + " x " + index + " = " + (n * index))

// Concatenar con Template String (con backstick)
// console.log(`${n} x ${index} = ${n * index}`)