/*
7) Realizá un programa que permita al usuario ingresar tres números. La computadora debe mostrarlos ordenados de menor a mayor.2
*/

let n1, n2, n3, orden;

n1 = parseInt(prompt("Ingresá el primer número:"));
n2 = parseInt(prompt("Ingresá el segundo número:"));
n3 = parseInt(prompt("Ingresá el tercer número:"));

if (n1 < n2 && n1 < n3 && n2 < n3) {
    orden = n1 + " " + n2 + " " + n3;                     // Opción     1)   1 2 3
} else {
    if (n1 < n3 && n1 < n2 && n3 < n2) {
        orden = n1 + " " + n3 + " " + n2;                 // Opción     2)   1 3 2
    } else {
        if (n2 < n1 && n2 < n3 && n1 < n3) {
            orden = n2 + " " + n1 + " " + n3;             // Opción     3)   2 1 3
        } else {
            if (n2 < n3 && n2 < n1 && n3 < n1) {
                orden = n2 + " " + n3 + " " + n1;         // Opción     4)   2 3 1
            } else {
                if (n3 < n1 && n3 < n2 && n1 < n2) {
                    orden = n3 + " " + n1 + " " + n2;     // Opción     5)   3 1 2
                } else {
                    orden = n3 + " " + n2 + " " + n1;     // Opción     6)   3 2 1
                }   
            }
        }
    }
}

console.log("Ordenados de menor a mayor: ", orden);