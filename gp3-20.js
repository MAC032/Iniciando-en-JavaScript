/*
20) Realizá un programa que permita al usuario ingresar dos números enteros que representen el ancho y el alto de una matriz de cruces. La computadora debe mostrar dicha matriz.
*/

// Solicitar al usuario ingresar el ancho y el alto de la amtriz
let ancho = parseInt(prompt("Ingrese el ancho de la matriz:"));
let alto = parseInt(prompt("Ingrese el alto de la matriz:"));

// Verificar que los números ingresados sean números enteros
if (isNaN(ancho) || isNaN(alto) || ancho <= 0 || alto <= 0) {
    alert("Por favor, ingrese números enteros positivos para el ancho y el alto.");
} else {
    // Crear y mostrar la matriz de cruces
    for (let i = 0; i < alto; i++) {
        let fila = "";
        for (let j = 0; j < ancho; j++) {
            // Colocar una cruz en la posición central de la matriz
            if (i === Math.floor(alto / 2) || j === Math.floor(ancho / 2)) {
                fila += "+";
            } else {
                fila += " ";
            }
        }
        console.log(fila);
    }
}