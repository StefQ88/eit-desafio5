let cantidadDeGatos = 12;
let emojis = ["😺", "😸", "😹"];

for (let i = 1; i <= cantidadDeGatos; i++) {
  console.log(`Gato #${i}: ${emojis[(i - 1) % 3]}`);
}
