//const é um tipo literal, pois não há alteração

const a = 100; //tipo literal (+ usado)
let b = 100 as const //tipo literal
let c: 200 = 200 //tipo literal

const pessoa = {
  firstName: "Tiago" as const //maneira de deixar algo mutável em tipo literal
}

//pessoa.firstName = "s"

export default 1


