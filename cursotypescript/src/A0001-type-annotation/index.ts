const nome: string = 'Tiago';
let idade: number = 21;
let adulto: boolean = true;
let simbolo: symbol = Symbol("qualquer-symbol");

let arrayDeNumeros: Array<number> = [1, 2, 3];
//ou
let arrayDeNomes: string[] = ["Carlos", "Luana"];

let objetoDePessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: "Lucas",
  idade: 21,
  adulto: true //opcional
}

function soma(x: number, y: number): number {
  return x + y
}
const soma2: (x: number, y: number) => number = (x, y) => {
  return x / y
}

console.log(soma2(2, 3))
