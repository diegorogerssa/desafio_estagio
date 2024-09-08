// 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

// Ao final do processamento, qual será o valor da variável SOMA?

let soma = 0
let k = 1
for (let index = 12; k < index; k +=1) {
  soma = soma + k
}

console.log(soma); //resposta: 66


