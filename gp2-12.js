/*
12) Realizá un programa que permita al usuario ingresar el día y el mes de su cumpleaños (de manera independiente). La computadora debe indicar cuál es su signo del zodiaco. Deben validarse tanto el día como el mes.
*/

let d, m, signo;

d = parseInt(prompt("Ingresá el día"));
m = parseInt(prompt("Ingresá el mes"));

if (d > 31) {
    console.log("Día incorrecto")
}

switch (m) {
    case 1:
        signo = d < 20 ? "Capricornio" : "Acuario";
        break;
    case 2:
        signo = d < 19 ? "Acuario" : "Piscis";
        break;
    case 3:
        signo = d < 21 ? "Piscis" : "Aries";
        break;
    case 4:
        signo = d < 20 ? "Aries" : "Tauro";
        break;
    case 5:
        signo = d < 21 ? "Tauro" : "Geminis";
        break;
    case 6:
        signo = d < 21 ? "Geminis" : "Cáncer";
        break;
    case 7:
        signo = d < 23 ? "Cáncer" : "Leo";
        break;
    case 8:
        signo = d < 23 ? "Leo" : "Virgo";
        break;
    case 9:
        signo = d < 23 ? "Virgo" : "Libra";
        break;
    case 10:
        signo = d < 23 ? "Libra" : "Escorpio";
        break;
    case 11:
        signo = d < 22 ? "Escorpio" : "Sagitario";
        break;
    case 12:
        signo = d < 22 ? "Sagitario" : "Capricornio";
        break;
    default:
        break;
        console.log("Mes inválido");
}

if (m < 13) {
    console.log("Tú signo es " + signo);
}
