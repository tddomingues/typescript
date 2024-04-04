//undefined = em variaveis opcionais('lastName?')
function createPerson(firstName: string, lastName?: string): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName, lastName
  }
}

//null
function squareOf(x: any) {
  if (typeof x === "number") return x * x
  return null
}

const squareOfTwoNumber = squareOf(3) //mude para "3" string para ver o erro

//checar o null
if (squareOfTwoNumber === null) {
  console.log("Conta inválido por erro de tipagem")
} else {
  console.log(squareOfTwoNumber)
}


