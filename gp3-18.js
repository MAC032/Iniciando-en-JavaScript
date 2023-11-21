/*
18) Realizá un programa que permita al usuario ingresar 12 valores, de a uno por vez, que representan los sueldos mensuales que percibió un empleado durante un año. Si durante la carga de los sueldos mensuales se detecta un valor negativo, esto indica que aún no se ha cobrado el mes en curso, por lo tanto, deben dejar de ingresarse datos. La computadora debe mostrar el sueldo anual percibido (total o parcial).
*/

let sueldoAnual = 0;

for (let m = 1; m < 12; m++) {
    sueldoMes = parseInt(prompt(`Ingrese el sueldo para el mes ${m}`));
    
    if (sueldoMes < 0) {
        break;
    }
    sueldoAnual = sueldoAnual + sueldoMes;
}

console.log(`El sueldo anual es de $ ${sueldoAnual}`);