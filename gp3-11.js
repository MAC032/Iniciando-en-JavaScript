/*
11) Realizá un programa que permita validar una nota de examen de la misma manera que el   ejercicio anterior, pero con las siguientes nuevas directivas:
▪ La nota 0 se reserva para los ausentes.
▪ Las notas 1 y 3 no se suelen poner nunca.
*/

let nota;

nota = parseInt(prompt("Ingresa una nota"));

while (nota > 10 || nota < 0) {
    nota = parseInt(prompt("ERROR, nota fuera de rango"));
}
while (nota === 1 || nota === 3) {
    nota = parseInt(prompt("ERROR, nota inválida"));
}
while (nota === 0) {
    nota = parseInt(prompt("ERROR, nota reservada para los ausentes"));
}
