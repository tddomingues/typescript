type TemNome = {nome: string}
type TemIdade = {idade: number}

type Pessoa = TemIdade & TemNome

//intersection type (&) garante que o tipo Pessoa tenha idade e nome
//union (|) não garante
const pessoa: Pessoa = {
  idade: 21,
  nome: "Luca"
}

console.log(pessoa)

export {pessoa}
