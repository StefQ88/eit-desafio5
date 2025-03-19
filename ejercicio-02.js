let cantidadDeGatos = 2;
let cantidadDePasos = 3;

for (let i = 1; i <= cantidadDeGatos; i++) {
  let pasos = "";

  for (let j = 1; j <= cantidadDePasos; j++) {
    pasos += "🐾";
  }

  console.log(`Gato #${i}: 🐈 ${pasos}`);
}
