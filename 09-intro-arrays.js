let colores = []

console.log(colores.length)
console.log(colores)

colores.push("Rojo")
colores.push("Verde")
colores.push("Negro")
colores.push("Azul")
colores.push("Amarillo")
colores.push("Naranja")
colores.push("Blanco")

console.log(colores.length)
console.log(colores)

for (let i = 0; i < colores.length; i++) {
    const color = colores[i];
    console.log(color.toLocaleUpperCase());
}