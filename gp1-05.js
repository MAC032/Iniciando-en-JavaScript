/*
5) Realizá un programa que permita al usuario ingresar valores del mismo tipo para las variables a y b. Una vez cargadas, la computadora debe mostrar ambas variables por pantalla, intercambiar entre sí sus valores (que lo cargado en a quede en b, y viceversa), y volver a mostrarlas.
*/

let a, b, c;

a = parseInt(prompt("Ingresá un valor para A: "));
b = parseInt(prompt("Ingresá un valor para B: "));

console.log("Se muestran A y B");
console.log(a + " y " + b);

c = b;
b = a;
a = c;

console.log("Valores intercambiados");
console.log("Se muestran A y B");
console.log(a + " y " + b);