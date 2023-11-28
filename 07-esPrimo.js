// Definición de funciones
function leerEntero(mensaje) {
    return parseInt(prompt(mensaje));
}

function esMultiplo(a, b) {
    return a % b === 0;
}

function cantDivisores(num) {
    let cant = 1;
    for (let i = 2; i <= num; i++) {
        if (esMultiplo(num, i)) {
            cant++;
        }   
    }
    return cant;
}

function esPrimo(n) {
    return cantDivisores(n) === 2;
}


// Programa principal
let unNumero = leerEntero("Ingresá un entero");
if (esPrimo(unNumero)) {
    console.log(`El número ${unNumero} es primo`);
    
} else {
    
}