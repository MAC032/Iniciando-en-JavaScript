/*
11) Realizá un programa que permita validar una nota de examen de la misma manera que el   ejercicio anterior, pero con las siguientes nuevas directivas:
▪ La nota 0 se reserva para los ausentes.
▪ Las notas 1 y 3 no se suelen poner nunca.
En resumen, las notas válidas deberán ser el 2 y el rango comprendido entre el 4 y el 10.
*/

let nota = parseInt(prompt('Ingresa una nota'));

while (nota !== 0 && nota !== 1 && nota !== 2 && nota !== 3 && (nota < 4 || nota > 10)) {
  nota = parseInt(prompt('Ingresa una nota'));
}

if (nota === 0) {
  console.log('Esta ausente');
} else if (nota === 1 || nota === 3) {
    console.log('La nota no se suele poner nunca');
} else if (nota === 2) {
    console.log('La nota es válida');
} else {
    console.log('La nota es válida');
}