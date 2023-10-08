/*
6) Realizá un programa que permita al usuario ingresar el valor unitario de cierto artículo y la cantidad de artículos vendidos por un vendedor, del cual se sabe que gana un sueldo fijo de $14000 más el 16% del monto total vendido. Con tales datos, la computadora debe calcular el sueldo mensual del vendedor y mostrarlo.
*/

let precio, cantidad, sueldo;

precio = parseFloat(prompt("¿Cuánto vale cada artículo? "));
cantidad = parseInt(prompt("¿Cuántos artículos se vendieron en el mes? "));

sueldo = ((precio * cantidad) * (16/100)) + 14000;

console.log("El sueldo mensual es de $ " + sueldo);