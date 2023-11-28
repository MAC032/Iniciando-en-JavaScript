/*
3) imprimirSimbolo, que imprima por consola n veces un caracter en la misma línea. Tanto n como el caracter se reciben como parámetro.
*/

function imprimirSimbolo(n, caracter) {
    // Verificar que n sea un número positivo
    if (typeof n !== 'number' || n <= 0) {
        console.log('El valor de n debe ser un número positivo.');
        return;
    }

    // Verificar que caracter sea un solo caracter
    if (typeof caracter !== 'string' || caracter.length !== 1) {
        console.log('El valor de caracter debe ser un solo carácter.');
        return;
    }
    
    // Construir la cadena con el carácter repetido n veces
    let linea = caracter.repeat(n);

    // Imprimir la cadena en la misma línea
    console.log(linea);
}

// Ejemplos de uso

imprimirSimbolo(5, '*'); // Imprimirá "*****"
imprimirSimbolo(3, '#'); // Imprimirá "###"
imprimirSimbolo(0, '$'); // Imprimirá un mensaje de error
imprimirSimbolo(4, '##'); // Imprimirá un mensaje de error