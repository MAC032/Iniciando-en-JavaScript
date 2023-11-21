/*
16) Realizá un programa que permita al usuario ingresar números enteros. Por cada carga debe preguntar si se desea seguir ingresando, de la forma "¿Deseás ingresar otro número? [S/N]". La carga de datos finaliza cuando se detecta una 'n' o 'N'. Reutilizá el algoritmo realizado en el ejercicio 37) para validar la opción ingresada. La computadora debe mostrar el porcentaje de números pares ingresados.
*/

let sigoIngresando = true;
let totalNumeros = 0;
let numerosPares = 0;

while (sigoIngresando) {
  // Solicitar al usuario ingresar un número
  let numero = parseInt(prompt('Ingrese un número entero'));

  // Verificar si el número es par
  if (!isNaN(numero) && numero % 2 === 0) {
    numerosPares++;
  }
  
  totalNumeros++;

  let respuesta = prompt("¿Deseas ingresar otro número? [S/N]").toUpperCase();
  sigoIngresando = (respuesta === 'S');

}

let porcentajePares = (numerosPares / totalNumeros) * 100;
console.log(`Porcentaje de números pares: ${porcentajePares.toFixed(2)}%`);