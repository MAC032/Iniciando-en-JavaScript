/*
10) Realizá un programa que permita validar una nota de examen. Se espera que la nota que el usuario ingrese sea un número comprendido entre 0 y 10. La misma debe ser tantas veces ingresada como sean necesarias hasta que quede comprendida dentro del rango descripto.
*/

let nota;

nota = parseInt(prompt("Ingresa una nota entre 0 y 10"));

while (nota > 10 || nota < 0) {
    nota = parseInt(prompt("ERROR, nota fuera de rango"));
}

