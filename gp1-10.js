/*
10) Realizá un programa que permita al usuario ingresar los nombres de tres inversores junto al
capital invertido por cada uno. La computadora debe informar qué porcentaje del total aportó cada uno y cuál es el monto del total aportado entre los tres.
*/

let inv1, cap1, inv2, cap2, inv3, cap3, aporteTotal, pctj1, pctj2, pctj3;

inv1 = prompt("Ingresá el nombre del primer inversor: ");
cap1 = parseInt(prompt("Ingresá el capital del primer inversor: "));

inv2 = prompt("Ingresá el nombre del segundo inversor: ");
cap2 = parseInt(prompt("Ingresá el capital del segundo inversor: "));

inv3 = prompt("Ingresá el nombre del tercer inversor: ");
cap3 = parseInt(prompt("Ingresá el capital del tercer inversor: "));

aporteTotal = cap1 + cap2 + cap3;
pctj1 = (cap1 / aporteTotal) * 100;
pctj2 = (cap2 / aporteTotal) * 100;
pctj3 = (cap3 / aporteTotal) * 100;

console.log(inv1 + " aportó el " + pctj1 + "% del capital total.");
console.log(inv2 + " aportó el " + pctj2 + "% del capital total.");
console.log(inv3 + " aportó el " + pctj3 + "% del capital total.");
console.log("El capital total aportado es de $ " + (cap1 + cap2 + cap3));