export function funcao (this: Date, name: string, age: number) {
  console.log(name, age)
  console.log(this)
}

funcao.call(new Date(), "luiz", 32)
funcao.apply(new Date(), ["luiz", 32])
