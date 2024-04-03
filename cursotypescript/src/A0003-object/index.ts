const objectA: {
  chaveA: string;
  //readonly: chave trancada
  readonly chaveB: string;
  //caso eu queira inserir novas chaves?
  //cuidado ao deixar o objeto aberto
  [key: string]: string;
} = {
  chaveA: "A",
  chaveB: "B"
}

objectA.chaveA = "Valor A"

//não dá para criar uma nova chave, se não tiver o '[key: tipo]: tipo;'
objectA.C = "Valor B"


