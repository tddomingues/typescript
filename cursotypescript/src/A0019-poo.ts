//1) abstração: permite isolar de um objeto somente os conceitos
//que são necessários para o funcionamento do programa

// export class Pessoa {
//   private nome: string
//   private sobrenome: string
// }

//2) encapsulamento: ocultar partes internas de um objeto e exibir
//apenas o necessário p/ uso externo

// export class RemoteControl {
//   constructor(private poweStatus = false) {}
//   public turnOn(): void {
//     this.poweStatus = true
//   }
// }

//3) herança: passar caracteristicas de um objeto para outro

// export abstract class Animal {
//   constructor(public name: string) {}
//   abstract makeNoise(): void
// }

// export class Dog extends Animal {
//   makeNoise(): void {
//     console.log(`${this.name} está fazendo AU AU`)
//   }
// }

// export class Cat extends Animal {
//   makeNoise(): void {
//     console.log(`${this.name} está fazendo MIAU`)
//   }
// }

//4) polimorfismo: habilidade de objetos de classes diferentes respondenrem a mesma mensagem
//de diferentes maneiras
//ex: brinqueto (aviao e carro) recebe o sinal mover. P/ avião é voar, p/ carro é correr
