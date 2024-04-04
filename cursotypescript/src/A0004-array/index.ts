// Array<T> ou T[]

function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1)
}

function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor)
}

const result = multiplicaArgs(1, 4)
const concatenacao = concatenaString("o", "i")

console.log(result)
console.log(concatenacao)
