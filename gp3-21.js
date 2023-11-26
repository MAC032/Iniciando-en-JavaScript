/*
21) Realizá un programa que permita al usuario ingresar un número de minutos. La computadora debe mostrar un cronómetro con el formato "mm:ss" desde "00:00" hasta un segundo antes del minuto ingresado.
*/

// Solicitar al usuario ingresar un número de minutos
let minutos = prompt("Ingrese el número de minutos:");

// Verificar si el valor ingresado es un número válido
if (isNaN(minutos) || minutos <= 0) {
    console.log("Por favor, ingrese un número válido de minutos.");
} else {
    // Convertir minutos a segundos
    let totalSegundos = minutos * 60;

    // Inicializar variables para minutos y segundos
    let minutosActuales, segundosActuales;

    // Bucle principal para contar el tiempo
    while (totalSegundos > 0) {
        // Calcular minutos y segundos actuales
        minutosActuales = Math.floor(totalSegundos / 60);
        segundosActuales = totalSegundos % 60;

        // Formater la salida como "mm:ss"
        let tiempoFormateado = 
            (minutosActuales < 10 ? "0" : "") + minutosActuales + ":" + 
            (segundosActuales < 10 ? "0" : "") + segundosActuales;

        // Mostrar el cronómetro
        console.log(tiempoFormateado);

        // Decrementar el tiempo restante
        totalSegundos--;

        // Introducir un retraso de 1000 milisegundos (1 segundo)
        // para simular la cuenta regresiva en tiempo real
        let startTime = new Date().getTime();
        while (new Date().getTime() - startTime < 1000);
    }
    
    console.log("¡Tiempo agotado!");

}
