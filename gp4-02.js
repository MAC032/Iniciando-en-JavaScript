/* 2) obtenerResto, que devuelva el resto del cociente entre dos números enteros dados como parámetros (sin usar el operador %). */

function obtenerResto(dividendo, divisor) {
    if (divisor === 0) {
        // Manejar la división por cero según sea necesario
        console.error("Error: No se puede dividir por cero.");
        return NaN; // o algún otro valor que indique error
    }
    
    // Calcular la división sin usar el operador %
    let cociente = Math.floor(dividendo / divisor);

    // Calcular el resto
    let resto = dividendo - (cociente * divisor);
    return resto;
}

// Ejemplo de uso
let resultado = obtenerResto(17, 5);
console.log(resultado); // Debería imprimir 2