//any = qualquer tipo
//utilize any em ultimo caso

function showMessage(msg: any) {
  return msg
}

console.log(showMessage(1))
console.log(showMessage(["a", "s"]))
console.log(showMessage("s"))

//sempre seja explicito com o retorno das funções
//void
function semRetorno(...args: string[]): void {
  console.log(args)
}

console.log("======")

const pessoa = {
  numero: 2,
  exibirNumb(): void {
    console.log(this.numero)
  }
}

pessoa.exibirNumb()
semRetorno("um", "dois", "tres")
