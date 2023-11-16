// cont = cont + 1

/*
for (let cont = 1; cont <= 100; cont++) {
    //console.log(cont + " Hola mundo de los ciclos")
    console.log(`${cont} Hola mundo de los ciclos`)
}
*/

let num = parseInt(prompt("Ingrese num positivo"))
while (num <= 0) {
    num = parseInt(prompt("ERROR. Ingrese num positivo"))
}
// Seguimos adelante con un numero positivo