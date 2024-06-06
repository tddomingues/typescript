type Idade = number
type Pessoa = {
  nome: string
  idade: Idade
  salario: number
  corPreferida?: string
}
type CorRGB= "Vermelho" | "Verde" | "Azul"
type CorBlack= "Preto"
type corPreferida = CorBlack | CorRGB

const pessoa: Pessoa = {
  idade: 32,
  nome: "Tiago",
  salario: 3200
}

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
  return {...pessoa, corPreferida: cor}
}

console.log(setCorPreferida(pessoa, "Azul"))
