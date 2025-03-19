let cantidadDeGatos = 10;
let cantidadDePasos = 10;

const gatoAmarillo = "🐈";
const gatoVioleta = "🐈‍⬛";

for (let i = 1; i <= cantidadDeGatos; i++) {
  let pasos = "";

  let gato = i % 2 === 0 ? gatoAmarillo : gatoVioleta;

  for (let j = 1; j <= cantidadDePasos; j++) {
    pasos += "🐾";
  }

  console.log(`Gato #${i}: ${gato} ${pasos}`);
}


