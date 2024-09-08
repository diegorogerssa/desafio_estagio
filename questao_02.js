// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

const buscaLetraA = (palavra) => {
  let count = 0

  for (const letra of palavra.toUpperCase()) {
    if (letra === "A") {
      count ++
    }
  }
  if (count > 0) {
    return console.log(`A letra 'a' se repete ${count} ${count === 1 ? "vez": "vezes"} na palavra ${palavra}`);
  } 
  return console.log(`A palavra ${palavra} não contem a letra 'a'`);
}

buscaLetraA("Diego")
buscaLetraA("Miriam")
buscaLetraA("Giulia")
buscaLetraA("heloisa")
buscaLetraA("banana")
buscaLetraA("Araraquara")
