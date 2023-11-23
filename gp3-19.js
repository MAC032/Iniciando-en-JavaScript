/*
19) Realizá un programa que permita la validación del ingreso a un sitio web. Teniendo ya precargados un nombre de usuario ("admin") y una contraseña ("123456"), el programa debe permitir al usuario ingresar sus credenciales. Si las mismas son erróneas, se volverán a pedir hasta un máximo de 3 intentos. Finalmente, la computadora debe mostrar alguno de los siguientes mensajes según sea el caso: "Acceso concedido" o "Se ha bloqueado la cuenta".
*/

const USUARIO = "admin";
const CONTRASENIA = "123456";
const INTENTOS = 3;

let contador = 0;

while (contador < INTENTOS) {
    let validaUsuario = prompt("Ingrese su nombre de usuario:");
    let validaContrasenia = prompt("Ingrese su contraseña:");
    
    if (USUARIO === validaUsuario && CONTRASENIA === validaContrasenia) {
        console.log("Acceso concedido");
        break;
    } else {
        console.log("Credenciales incorrectas. Inténtelo de nuevo.")
        contador++;
        console.log(`Te quedan ${INTENTOS - contador} intentos`);
    }
}

if (contador === INTENTOS) {
    console.log("Se ha bloqueado la cuenta");   
}