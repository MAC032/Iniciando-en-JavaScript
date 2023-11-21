/*
Realizá un programa que permita al usuario ingresar la cantidad de cierto artículo y el precio unitario de dicho artículo. Por cada carga debe preguntar si se desea seguir ingresando de la forma "¿Deseás ingresar otro artículo? [S/N]". La carga de datos finaliza cuando se detecta una 'n' o 'N'. Reutilizá el algoritmo realizado en el ejercicio 37) para validar la opción ingresada. La computadora debe mostrar el monto total del ticket.
*/

let sigoIngresando = true;
let total = 0;

while (sigoIngresando) {
  let cantidad = parseInt(prompt('Ingrese la cantidad del producto'));
  let precio = parseFloat(prompt('Ingrese el precio del producto'));

  let subTotalProducto = cantidad * precio;
  total = total + subTotalProducto;

  let respuesta = prompt("¿Deseas ingresar otro producto? [S/N]").toUpperCase();
  sigoIngresando = (respuesta === 'S');
}

console.log(`El importe total del ticket es $ ${total.toFixed(2)}`)