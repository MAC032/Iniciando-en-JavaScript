/*
13) Realizá un programa que permita al usuario ingresar números hasta que se introduzca un 0. La computadora debe mostrar el número máximo y el número mínimo.
*/

let num, min, max;

//Inicializo las variables para min y max con valores extremos
min = Number.MAX_SAFE_INTEGER;
max = Number.MIN_SAFE_INTEGER;

num = parseInt(prompt("Ingresá un número (ingresa 0 para terminar)"));

while (num !== 0) {
    num = parseInt(prompt("Ingresá un número (ingresa 0 para terminar)"));
    
    //Verifico que si se ingreso el 0 salgo del bucle sin contar al 0 cómo mínimo
    if (num === 0 ) {
        break;
    }

    //Actualizo el mínimo si el número ingresado es menor
    if (num < min ) {
        min = num;
    }

    //Actualizo el máximo si el número ingresado es mayor
    if (num > max) {
        max = num;
    }
}

//Muestro el número mínimo y máximo
console.log(`El mínimo fue ${min} y el máximo fue ${max}`);
