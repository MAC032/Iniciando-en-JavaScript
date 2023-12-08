async function mostrarDataDePaises() {
    const respuesta = await fetch("https://restcountries.com/v3.1/all")
    const respuestaJSON = await respuesta.json();
    console.log(respuestaJSON)
}

async function mostrarInfoDePaises(nomPais) {
    const respuesta = await fetch(`https://restcountries.com/v3.1/name/${nomPais}`)
    const respuestaJSON = await respuesta.json();
    console.log(respuestaJSON)
}

mostrarDataDePaises();
console.log("Ir a buscar noticias a Google Ads")
