enum Numeros {
  ZERO,
  UM,
  DOIS,
  TRES
}

enum Aleatorio {
  ROXO = "ROXO",
  NUMERO = 21
}

function escolhaONumero(numero: Numeros): void {
  console.log(Numeros[numero])
}

console.log(Numeros)
console.log(Numeros.ZERO) // ZERO = 0
console.log(Numeros[0]) // NOME DO ATRIBUTO CUJO O VALOR É ZERO
console.log(Numeros[10])//undefined -> primeiro PROBLEMA em usar ENUM

console.log(Aleatorio.ROXO)
console.log(Aleatorio.NUMERO)

escolhaONumero(3)
