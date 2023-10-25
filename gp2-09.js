/*
9) Realizá un programa que permita al usuario ingresar los lados a, b y c de un triángulo. La computadora informa si el triángulo es o no válido4. En caso afirmativo, además informa si es equilátero, isósceles o escaleno.5
*/
/*
4 Según el teorema de desigualdad triangular, un triángulo es válido si se cumple que cada uno de los lados no puede ser más largo que la suma de los otros dos.
5 Un triángulo equilátero es aquel que tiene sus tres lados iguales. Un triángulo isósceles es aquel que tiene dos de sus lados iguales. Un triángulo escaleno es aquel que tiene sus tres lados desiguales.
*/

let a, b, c;

a = parseInt(prompt("Ingresá el primer lado del triángulo:"));
b = parseInt(prompt("Ingresá el segundo lado del triángulo:"));
c = parseInt(prompt("Ingresá el tercer lado del triángulo:"));

if (a + b > c && a + c > b && b + c > a) {
    console.log("Es un triángulo válido");
    if (a === b && a === c) {
        console.log("El triángulo es equilátero");
    } else if (a !== b && b !== c) {
        console.log("El triángulo es escaleno");
    } else {
        console.log("El triángulo es isósceles");
    }
} else {
    console.log("No es un triángulo válido");
}