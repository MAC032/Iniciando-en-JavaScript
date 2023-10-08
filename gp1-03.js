/*
3) Realizá un programa que permita al usuario ingresar 3 notas pertenecientes a tres trimestres distintos para cierto alumno. La computadora debe mostrar la nota promedio.
*/

let nota1, nota2, nota3, promedio;

nota1 = parseInt(prompt("Ingresa la nota del 1° trimestre: "));
nota2 = parseInt(prompt("Ingresa la nota del 2° trimestre: "));
nota3 = parseInt(prompt("Ingresa la nota del 3° trimestre: "));

promedio = (nota1 + nota2 + nota3)/3;

console.log("La nota promedio es: " + promedio);