/*
2) Realizá un programa que permita al usuario ingresar un número entero. La computadora debe informar el número opuesto1 y el número inverso2 del ingresado.
*/

let num;
let opuesto;
let inverso;

num = parseInt(prompt("Ingrese un número entero: "));

opuesto = num * (-1);
inverso = 1 / num;

console.log("El número opuesto es " + opuesto + " y el invesro es " + inverso);