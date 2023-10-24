/*
6) Realizá un programa que permita al usuario ingresar la edad y el sueldo de cierto empleado. La computadora muestra el monto del aporte al sindicato que se debe descontar del salario del
empleado, según el siguiente cuadro:

Escala salarial             Porcentaje a descontar
Menos de $20000                       0.7%
Entre $20000 y $29999                 1.4%
Entre $30000 y $39999                 2.1%
$40000 o más                          2.8%
Además, si la persona tiene 30 años o menos, se cobra un 30% adicional del valor del aporte.
*/

let edad, sueldo, aporte;

edad = parseInt(prompt("Ingresa la edad del empleado"));
sueldo = parseInt(prompt("Ingresa el sueldo del empleado"));

if (sueldo < 20000) {
    aporte = (0.7 / 100) * sueldo;
} else {
    if (sueldo >= 20000 && sueldo <= 29999) {
        aporte = (1.4 / 100) * sueldo;
    } else {
        if (sueldo >= 30000 && sueldo <= 39999) {
            aporte = (2.1 / 100) * sueldo;
        } else {
            aporte = (2.8 / 100) * sueldo;
        }
    }
}
if (edad <= 30) {
    adicional = (30 / 100) * aporte;
    console.log("El valor del aporte es de $ " + (aporte + adicional));
} else {
    console.log("El valor del aporte es de $ " + aporte);
}

