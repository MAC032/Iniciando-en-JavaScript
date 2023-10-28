/*
11) Realizá un programa que permita al usuario ingresar una letra, correspondiente a un dígito del sistema de numeración romano6. La computadora debe mostrar su correspondiente valor decimal. Si se ingresa una letra inexistente, la computadora debe informar que no existe tal dígito.
*/
/*
6 Los símbolos de numeración romana y sus valores son: I (1), V (5), X (10), L (50), C (100), D (500), M (1000).
*/

let l;
let num;

l = prompt("Ingresá un dígito del sistema de numeración romano");

switch (l) {
    case "I":
        num = 1;
        break;
    case "V":
        num = 5;
        break;
    case "X":
        num = 10;
        break;
    case "L":
        num = 50;
        break;
    case "C":
        num = 100;
        break;
    case "D":
        num = 500;
        break;
    case "M":
        num = 1000;
        break;
    default:
        console.log("No existe ese dígito");
        break;    
}

if (l == "I" || l == "V" || l == "X" || l == "L" || l == "C" || l == "D" || l == "M") {
    console.log(num);
}
