/*
10) Realizá un programa que permita al usuario ingresar un número entero entre 1 y 12. La computadora debe mostrar por pantalla el nombre del mes del año que representa tal número. Si se ingresa un número fuera de rango, debe mostrar un error.
*/

let n, mes;

n = parseInt(prompt("Ingresá el número del mes"));

switch (n) {
    case 1:
        mes = "Enero";
        break;
    case 2:
        mes = "Febrero";
        break;
    case 3:
        mes = "Marzo";
        break;
    case 4:
        mes = "Abril";
        break;
    case 5:
        mes = "Mayo";
        break;
    case 6:
        mes = "Junio";
        break;
    case 7:
        mes = "Julio";
        break;
    case 8:
        mes = "Agosto";
        break;
    case 9:
        mes = "Septiembre";
        break;
    case 10:
        mes = "Octubre";
        break;
    case 11:
        mes = "Noviembre";
        break;
    case 12:
        mes = "Diciembre";
        break;
    default:
        console.log("Mes inválido");
        break;    
}
if (n < 13) {
    console.log(mes);
}
