/* 
4) Realizá un programa que permita al usuario ingresar el valor salarial de una hora de trabajo y la cantidad de horas trabajadas por día. La computadora debe mostrar el valor del salario semanal, asumiendo que trabaja todos los días hábiles y media jornada los sábados.
*/

let horaTrabajo;
let horasPorDia;
let salarioSemanal;

horaTrabajo = parseInt(prompt("Ingresá el valor monetario de cada hora de trabajo: "));
horasPorDia = parseInt(prompt("Ingresá la cantidad de horas trabajadas: "));

salarioSemanal = horaTrabajo * ((horasPorDia * 5) + (horasPorDia / 2));

console.log("EL sueldo semanal es de $ " + salarioSemanal);
