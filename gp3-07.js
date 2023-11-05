/*
7) Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que permita ingresar cant números reales, correspondientes a las estaturas de un equipo de jugadores de baloncesto (en metros). La computadora debe mostrar la estatura promedio.
*/

let cant, estatura, total, promedio;

cant = parseInt(prompt("¿Cuántas estaturas vas a ingresar?"));

total = 0
promedio = 0;

for (let i = 1; i <= cant; i++) {
    estatura = parseFloat(prompt("Ingresar la altura del jugador " + i));
    total = total + estatura;
}

promedio = total / cant;
console.log(`La altura promedio es: ${promedio} mts.`);