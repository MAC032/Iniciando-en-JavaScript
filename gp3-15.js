/*
15) Realiza un programa que permita al usuario ingresar números mientras el promedio entre todos los ingresados sea menor a 20. La computadora debe indicar la cantidad de valores leídos.
*/

let num, sum, prom, cant;
cant = 0;
sum = 0;
prom = 0;
num = parseInt(prompt('Ingresa un número'));

while (prom < 20) {
    cant++;
    sum = sum + num;
    prom = sum / cant;

    console.log(`Promedio actual: ${prom}`)

    if (prom > 20) {
        break;
    }
    num = parseInt(prompt('Ingresa un número'));
}

console.log(`Se leyeron ${cant} valores`)